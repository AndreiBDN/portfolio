document.addEventListener('DOMContentLoaded',function(){
    let open = require('./parts/open_project'),
        nav = require('./parts/navigate'),
        show = require('./parts/show_more');




    open();
    nav();
    show();

})
