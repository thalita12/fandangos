module.exports = {

    client: {
        src: [
            global.params.test + '**/*.js',
            global.params.src + '/components/**/*.js',
            global.params.src + '/extensions/**/*.js',
            global.params.src + '/app.js'
        ],
        options: {
            configFile: ".eslintrc.json"
        }
    }

};