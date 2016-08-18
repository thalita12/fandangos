module.exports = function (isPluginProject) {

    global.params = {};

    var fs = require('fs');
    var glob = require('glob');


    function initPaths() {
        var pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        var bowerrc = JSON.parse(fs.readFileSync('.bowerrc', 'utf8'));
        global.params.env = process.env;
        global.params.name = pkg.name;
        global.params.version = pkg.version;
        global.params.group = pkg.group;
        global.params.parentApp = pkg.parentApp;
        global.params.src = pkg.directories.src;
        global.params.dist = pkg.directories.dist;
        global.params.test = pkg.directories.test;
        global.params.vendor = bowerrc.directory;
    }

    function initPluginPaths() {
        global.params.appBase = global.params.vendor + '/' + global.params.parentApp + '/src';
        global.params.appJson = JSON.parse(fs.readFileSync(global.params.appBase + '/app.json', 'utf8'));
        global.params.pluginJson = JSON.parse(fs.readFileSync(global.params.src + '/plugin.json', 'utf8'));
    }

    function loadGruntTasks(grunt, pattern) {
        if (pattern) {
            require('load-grunt-tasks')(grunt, {pattern: pattern});
        }
        else {
            require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', 'gruntify-*']});
        }
    }

    function configureGrunt(grunt, path, pattern) {
        var object = {},
            key;

        glob.sync('*', {cwd: path}).forEach(function (option) {
            key = option.replace(/\.js$/, '');
            object[key] = require(path + option);
        });

        grunt.initConfig(object);

        loadGruntTasks(grunt, pattern);
    }

    function configureKarma(config, disableCoverage) {

        var preprocessors = {};

        if (!(disableCoverage === true)) {
            if (isPluginProject) {
                preprocessors['**/' + global.params.parentApp + '/src/plugins/' + global.params.name + '/main.js'] = ['coverage'];
            }
            else {
                preprocessors[global.params.src + '/layout/**/*.js'] = ['coverage'];
            }
        }


        config.set({

            basePath: './',

            files: [
                {pattern: global.params.src + '/**/*.js', served: true, included: false},
                {pattern: global.params.src + '/**/*.json', served: true, included: false},
                {pattern: global.params.src + '/**/*.html', served: true, included: false},
                {pattern: global.params.src + '/**/*.css', served: true, included: false},
                {pattern: global.params.src + '/**/*.png', served: true, included: false},
                {pattern: global.params.test + '/**/*', served: true, included: false}
            ],

            autoWatch: false,

            singleRun: true,

            colors: true,

            logLevel: config.LOG_DEBUG,

            frameworks: ['jasmine-ajax','jasmine', 'requirejs'],

            browsers: ['Chrome'], //browsers: ['Chrome', 'Safari', 'PhantomJS'],

            preprocessors: preprocessors,

            reporters: ['junit', 'coverage', 'progress'],

            junitReporter: {
                outputDir: global.params.dist + '/reports/junit',
                outputFile: 'TESTS-xunit.xml',
                useBrowserName: false
            },

            coverageReporter: {
                type: 'lcov',
                dir: global.params.dist + '/reports/coverage/',
                subdir: '.'
            }

        });

    }

    function bowerInstallParentApp() {
        var exec = require('child_process').exec;
        var cb = this.async();
        exec('bower install', {cwd: '/' + global.params.vendor + '/' + global.params.parentApp}, function (err, stdout) {
            console.log(stdout);
            cb();
        });
    }

    initPaths();

    if (isPluginProject) {
        initPluginPaths();
    }

    return {
        configureGrunt: configureGrunt,
        configureKarma: configureKarma,
        bowerInstallParentApp: bowerInstallParentApp,
        params: global.params
    };
};
