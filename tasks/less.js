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
                'az-primary-color': '#F04903',
                'az-primary-font-color-hover': '#F29B34',
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
