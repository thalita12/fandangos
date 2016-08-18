module.exports = {

    options: {
        paths: ['styles']
    },
    web: {
        files: {
            'src/themes/web.css': 'styles/web.less'
        }
    },
    default: {
        options: {
            modifyVars: {
                'az-primary-color': '#56BDD8',
                'az-primary-font-color-hover': '#56D0EB',
                'az-primary-font-color': '#ffffff',
                'az-secondary-font-color': '#ffffff',
                'az-theme-folder': 'default'
            }
        },
        files: {
            'src/themes/theme-default.css': "styles/theme.less"
        }
    }
};
