require.config({
    paths: {
        jquery: '//yandex.st/jquery/1.10.2/jquery.min'
    },
    shim: {}
});

require(['app/utils/string']);
require(['app/utils/array']);
require(['app/init']);