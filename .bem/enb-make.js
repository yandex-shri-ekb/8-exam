module.exports = function (config) {
    config.nodes('src/pages/*');

    config.nodeMask(/src\/pages\/.*/, function (nodeConfig) {
        nodeConfig.addTechs([
            [require('enb/techs/file-provider'), {target: '?.bemjson.js'}],
            require('enb/techs/bemdecl-from-bemjson'),
            require('enb/techs/files'),
            [require('enb/techs/levels'), {levels: getLevels(config)}],
            require('enb-modules/techs/deps-with-modules'),
            [require('enb/techs/browser-js'), {target: '?.browser.js'}],
            [require('enb-modules/techs/prepend-modules'), {source: '?.browser.js', target: '?.modules.js'}],
            [require('bh/techs/bh-server'), {jsAttrName: 'data-bem', jsAttrScheme: 'json'}],
            [require('bh/techs/bh-client-module'), {target: '?.bh.client.js', jsAttrName: 'data-bem', jsAttrScheme: 'json'}],
            [require('enb/techs/file-merge'), {sources: ['?.modules.js', '?.bh.client.js'], target: '?.js'}],
            require('enb/techs/css'),
            require('enb/techs/html-from-bemjson')
        ]);

        nodeConfig.addTargets(['_?.js', '_?.css', '?.html']);

        nodeConfig.mode('development', function(nodeConfig) {
            nodeConfig.addTechs([
                [require('enb/techs/borschik'), {sourceTarget: '?.js', destTarget: '_?.js', minify: false}],
                [require('enb/techs/file-copy'), {sourceTarget: '?.css', destTarget: '_?.css'}]
           ]);
       });

        nodeConfig.mode('production', function(nodeConfig) {
            nodeConfig.addTechs([
                [require('enb/techs/borschik'), {sourceTarget: '?.js', destTarget: '_?.js'}],
                [require('enb/techs/borschik'), {sourceTarget: '?.css', destTarget: '_?.css', freeze: 'yes'}]
           ]);
        });
    });

    function getLevels() {
        return [
            'src/blocks/vendors/bem-core/common.blocks',
            'src/blocks/vendors/bem-core/desktop.blocks',
            'src/blocks/common'
        ].map(config.resolvePath.bind(config));
    }
};