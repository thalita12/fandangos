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
                'az-primary-color': '#59AE7F',
                'az-primary-color-hover': '#8cc7a7',
                'az-primary-color-active': '#4F8677',
                'az-primary-font-color-hover': '#ffffff',
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
