modules.define(
    'pers-switch__state',
    ['events'],
    function (provide, events) {
        var emitter = new events.Emitter(),
            switches = {};

        provide({
            emitter: emitter,
            changeState: function (data, value) {
                switches[data.area] = value;

                var ev = switches.top || switches.bottom;
                emitter.emit(ev ? 'hide' : 'show');
            }
        });
    }
);
