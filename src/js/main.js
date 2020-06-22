

document.addEventListener('DOMContentLoaded',function(){
    let open = require('./parts/open_project'),
        nav = require('./parts/navigate'),
        show = require('./parts/show_more'),
        skill = require('./parts/tabs_skill'),
        want = require('./parts/want');





    open();
    nav();
    show();
    skill();
    want();
    

    // tiny-slider


    

})


