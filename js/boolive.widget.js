/**
 * Базовый виджет с функциями взаимодействия с подчиненными и
 * родительсктими виджетами по паттерну "Цепочка обязанностей".
 * @author Vladimir Shestakov <boolive@yandex.ru>, 2012
 * @use jQuery (http://jquery.com)
 * @use jQueryUI (http://jqueryui.com/)
 */
(function($, undefined){
    /**
     * Виджет на основе JQuery UI Widget
     */
    $.widget("boolive.widget", {
        /**
         * @var {boolive.Widget}|undefined Родительский виджет
         */
        _parent: undefined,
        /**
         * @var {Array}|undefined Массив подчиненных виджетов
         */
        _children: undefined,

        /**
         * Конструктор объекта
         * @private
         */
        _create: function(){
            var self = this;
            this._children = {};

            // Добавление нового подчиненного в свой список
            this.element.on('_create'+this.eventNamespace, function(e, widget){
                return !self._addChild(widget);
            });
            // Удаление подчиенного из списка
            this.element.on('_destroy'+this.eventNamespace, function(e, widget){
                return !self._deleteChild(widget);
            });
            // Сообщаем родителю о своём создании
            this.element.trigger('_create', [this]);
        },
        /**
         * Деструктор объекта
         * @private
         */
        _destroy: function(){
            // Сообщаем родителю о своём удалении
            this.element.trigger('_destroy', [this]);
        },

        /**
         * Добавление подчиненного виджета
         * @param widget Объект виджета
         * @return {Boolean}
         * @private
         */
        _addChild: function(widget){
            if (widget != this){
                this._children[widget.uuid] = widget;
                widget._parent = this;
                return true;
            }
            return false;
        },
        /**
         * Удаление подчиненного виджета
         * @param widget Объект виджета
         * @return {Boolean}
         * @private
         */
        _deleteChild: function(widget){
            if (widget != this){
                delete this._children[widget.uuid];
                return true;
            }
            return false;
        },
        /**
         * Вызов дейсвтия у подчиненных
         * @param call Название действия (функции)
         * @param args Массив аргументов
         * @param target Объект, иницировавший вызов действия. По умолчанию this
         */
        callChildren: function(call, args, target){
            var stop = undefined;
            if (target){
                if ($.isFunction(this['call_'+call])){
                    if (!$.isArray(args)) args = [args];
                    var a = [{target: target, direct: 'children'}].concat(args);
                    stop = this['call_'+call].apply(this, a);
                }
            }
            if (stop !== undefined){
                return stop;
            }
            var result = [];
            for (var child in this._children){
                stop = this._children[child].callChildren(call, args, target || this);
                if (stop !== undefined){
                    result.push(stop);
                }
            }
            return result.length? result : undefined;
        },
        /**
         * Вызов дейсвтия у родителей
         * @param call Название действия (функции)
         * @param args Массив аргументов
         * @param target Объект, иницировавший вызов действия. По умолчанию this.
         * @param up Признак, когда вызов дойдет до корневого объекты, перенаправить вызов всем подчиненным.
         */
        callParents: function(call, args, target, up){
            if (!target) target = null;
            var stop = undefined;
            if (!up && target){
                if ($.isFunction(this['call_'+call])){
                    if (!$.isArray(args)) args = [args];
                    var a = [{target: target, direct: 'parents'}].concat(args);
                    stop = this['call_'+call].apply(this, a);
                }
            }
            if (stop !== undefined){
                return stop;
            }else
            if (this._parent){
                return this._parent.callParents(call, args, target || this, up);
            }else
            if (up){
                return this.callChildren(call, args, target);
            }
            return undefined;
        }
    });
})(jQuery);