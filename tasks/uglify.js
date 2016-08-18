var files = {};

var public = global.params.dist + '/public';

files[public + '/base/angular-i18n/angular-locale_en-us.js'] = [global.params.src + '/base/angular-i18n/angular-locale_en-us.js'];
files[public + '/base/angular-i18n/angular-locale_es-es.js'] = [global.params.src + '/base/angular-i18n/angular-locale_es-es.js'];
files[public + '/base/angular-i18n/angular-locale_pt-br.js'] = [global.params.src + '/base/angular-i18n/angular-locale_pt-br.js'];

files[public + '/base/kendoui/src/js/cultures/kendo.culture.en-US.js'] = [global.params.src + '/base/kendoui/src/js/cultures/kendo.culture.en-US.js'];
files[public + '/base/kendoui/src/js/cultures/kendo.culture.es-ES.js'] = [global.params.src + '/base/kendoui/src/js/cultures/kendo.culture.es-ES.js'];
files[public + '/base/kendoui/src/js/cultures/kendo.culture.pt-BR.js'] = [global.params.src + '/base/kendoui/src/js/cultures/kendo.culture.pt-BR.js'];

files[public + '/base/kendoui/src/js/messages/kendo.messages.en-US.js'] = [global.params.src + '/base/kendoui/src/js/messages/kendo.messages.en-US.js'];
files[public + '/base/kendoui/src/js/messages/kendo.messages.es-ES.js'] = [global.params.src + '/base/kendoui/src/js/messages/kendo.messages.es-ES.js'];
files[public + '/base/kendoui/src/js/messages/kendo.messages.pt-BR.js'] = [global.params.src + '/base/kendoui/src/js/messages/kendo.messages.pt-BR.js'];

files[public + '/base/legolas/dist/legolas.js'] = [global.params.src + '/base/legolas/dist/legolas.js'];
files[public + '/base/requirejs/require.js'] = [global.params.src + '/base/requirejs/require.js'];

module.exports = {

    options: {
        mangle: {
            except: ['$super']
        }
    },
    dist: {
        files: files
    }
};
