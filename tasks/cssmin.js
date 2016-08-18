var path = require('path');
var distfolder = path.join(global.params.dist, 'public', 'themes');
var srcfolder = path.join(global.params.src, 'themes');

module.exports = {
    web: {
        src: [path.join(srcfolder, 'web.css')],
        dest: path.join(distfolder, 'web.css')
    },
    theme_default: {
        src: [path.join(srcfolder, 'theme-default.css')],
        dest: path.join(distfolder, 'theme-default.css')
    }
};