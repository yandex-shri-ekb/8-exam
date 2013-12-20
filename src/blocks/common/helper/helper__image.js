module.exports = {
    getImage: function(src, mods, offset, orientation) {
        return {
            elem: 'content',
            mods: {
                offset: offset,
                orientation: orientation
            },
            content: {
                block: 'image',
                src: src,
                mods: mods,
                js: true
            }
        };
    },

    easyGetImage: function(type, name, offset, orientation, count, ext) {
        ext || (ext = '.png');
        count = count ? '-' + count : '';
        
        var mods = {};
        mods[type] = name + count;

        return this.getImage(
            '../../images/' + type + '/' + type + '-' + name + ext,
            mods,
            offset,
            orientation);
    }
};
