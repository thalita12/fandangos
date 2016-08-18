define(
    [
        'underscore',
        'james-hook',
        'jquery',
        'jszip',
        'bootstrap',
        'widgets',
        'angular',
        'angularRouter',
        'angularCookie'
    ],
    function (_, jamesHook, jquery, jszip) {

        window.JSZip = jszip;

        return {

            $: jquery,

            utils: _,

            hook: function () {
                return {
                    addAction: jamesHook.addAction,
                    doAction: jamesHook.doAction
                };
            },
            getCurrentProduto: function ($window) {
                var produto = 'efcaz';
                var url = $window.location.href;
                var results = new RegExp('[\?&]' + 'produto' + '=([^&#]*)').exec(url);

                if (results !== null) {
                    produto = results[1];
                }

                return produto;
            },
            getCurrentLang: function (url) {
                var lang = 'pt-BR';
                var results = new RegExp('[\?&]' + 'lang' + '=([^&#]*)').exec(url);

                if (results !== null) {
                    lang = results[1];
                }

                return lang;
            },
            getCurrentHash: function(url){
                var hash = '0000';
                var results = new RegExp('[\?&]' + 'hash' + '=([^&#]*)').exec(url);

                if (results !== null) {
                    hash = results[1];
                }

                return hash;
            },
            getWindowObject:function(){
                return window;
            }
        };
    }
);
