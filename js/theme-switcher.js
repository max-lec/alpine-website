/* Theme switcher */

// carousel items
function theme_switcher() {
    return {

        items: [
            { color: '#f7f7e9', theme: 'theme-light'},
            { color: '#072849', theme: 'theme-dark'},
            { color: '#f1beb0', theme: 'theme-olivia'},
        ],

        switch_theme(newTheme) {
            document.querySelector('body').classList=[];
            document.querySelector('body').classList.add(newTheme);
        },
    };

}
