var fs = require('fs');

var legolas = require('../src/base/legolas/dist/legolas.js');

var appOptions = JSON.parse(fs.readFileSync('./src/app.json', 'utf8'));

var pluginOptions = JSON.parse(fs.readFileSync('./src/plugin.json', 'utf8'));

var devOptions = {
    baseUrl: global.params.src
}

var mergedOptions = legolas.mergeRequireConfig(devOptions, appOptions, pluginOptions);

module.exports = {
    minifyJs: {
        options: {
            name: 'app',
            baseUrl: devOptions.baseUrl,
            paths: mergedOptions.paths,
            shim: mergedOptions.shim,
            packages: mergedOptions.packages,
            deps: mergedOptions.deps,
            out: global.params.dist + '/public/app.js',
            generateSourceMaps: true,
            preserveLicenseComments: false,
            optimize: 'uglify2',
            uglify2: {
                mangle: {
                    except: ['$super']
                }
            }
        }
    }
};