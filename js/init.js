/* Executes on page load */

document.addEventListener('alpine:init', () => {

    // section titles
    Alpine.data('titles', () => ({
        site_title: 'My alpine webiste',
        home_title: 'Home', 
        who_title: 'About', 
        what_title: 'Projects', 
        where_title: 'Contact' ,
    }));
})