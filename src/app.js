(function (legolas) {

    legolas.start({

        baseUrl: '.',

        appConfigUrl: 'app.json',

        pluginConfigUrl: 'plugin.json',

        mockModules: [],

        tests: [],

        callback: function (err) {
            if (err) {
                alert('Ocorreu um erro durante a inicialização da aplicação');//NOSONAR
            }
        }
    });

})(window.legolas);
