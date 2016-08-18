module.exports = {
    options: {
        dest: global.params.dist + '/jsdoc'
    },
    all: {
        src: [
            global.params.src + '/components/**/*.js',
            global.params.src + '/extensions/**/*.js',
            global.params.src + '/app.js'
        ]
    }
};