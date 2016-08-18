var path = require('path');

module.exports = {

    analise: {

        options: {
            debug: true,
            separator: '\n',
            sonar: {
                working: {
                    directory: global.params.dist + '/sonar'
                },
                language: 'js',
                sourceEncoding: 'UTF-8',
                host: {
                    url: 'http://sonar.azi.com.br'
                },
                login: 'hudsonci',
                password: 'aznoutes',

                javascript: {
                    lcov: {
                        reportPath: global.params.dist + '/reports/coverage/lcov.info'
                    },
                    jstestdriver: {
                        reportsPath: global.params.dist + '/reports/junit'
                    }
                },

                projectKey: global.params.group + ':' + global.params.name,
                projectName: global.params.name,
                projectVersion: global.params.version,
                tests: global.params.test,

                sources: [
                    global.params.src,
                    'styles'
                ].join(','),

                exclusions: [
                    global.params.src + '/base/**',
                    global.params.src + '/app.js',
                    global.params.src + '/plugins/**'
                ]
            }
        }
    }
};
