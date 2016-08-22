module.exports = {
    gzip: {
        options: {
            mode: 'gzip',
            level: 9
        },
        files: [
            {
                expand: true,
                src: [global.params.dist + '/public/**/*.js'],
                ext: '.js.gz'
            },
            {
                expand: true,
                src: [global.params.dist + '/public/**/*.css'],
                ext: '.css.gz'
            }
        ]
    },

    zip: {
        options: {
            archive: global.params.dist + '/fandangos.zip'
        },
        files: [
            {expand: true, cwd: global.params.dist + '/public', src: ['**/*']}
        ]
    }
};