var path = require('path');

module.exports = {

    dist: {
        expand: true,
        cwd: global.params.src,
        src: [
            'app.json',
            'plugin.json',
            'index.html',
            'favicon.ico',
            'lang/**',
            'themes/**',
            'base/bootstrap/fonts/**',
            'base/kendoui/src/styles/web/Bootstrap/**',
            'base/kendoui/src/styles/web/images/**',
            'base/kendoui/src/styles/web/fonts/**',
            'base/kendoui/src/styles/web/textures/**',
            'base/modeler/dist/**'
        ],
        dest: path.join(global.params.dist, 'public')
    }
};
