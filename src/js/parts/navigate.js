function navigate() {
    let navLinks = document.querySelectorAll("[data-link]"),
        links = document.querySelectorAll('.nav__link'),
        header = document.querySelector('.header'),
        mobNav = document.querySelector('.nav__mob'),
        sections = document.querySelectorAll('section'),
        navList = document.querySelector('.nav__list'),

        widthScreen = document.body.clientWidth;


    window.addEventListener('resize', () => {
        let bodySize = document.body.clientWidth;

        console.log(bodySize);
        
        if (bodySize > 600) {
            hideMobNav();
        } else if (bodySize <= 600 && sections[0].classList.contains('active')) {
            hideMobNav();

        } else {
            shovNav();
        }
    })

    function hideMobOnMain() {
        if (widthScreen < 601 && sections[0].classList.contains('active')) {
            hideMobNav()
        } else if (widthScreen >= 601) {
            hideMobNav();
        } else {
            shovNav();
        }
    }




    function hideMobNav() {
        navList.classList.remove('show');
        mobNav.querySelector('span').classList.remove('active');

        mobNav.classList.remove('active');

    }

    function shovNav() {

        mobNav.classList.add('active');

    }

    function showMobNav() {

        navList.classList.toggle('show');
        mobNav.querySelector('span').classList.toggle('active');
    }

    function changeBlock(t) {
        sections.forEach(item => item.classList.remove('active'))
        t.classList.add('active')
    }

    function fixHeader(t) {
        if (t != 'main') {
            header.classList.add('fix');
            navLinks.forEach(i => i.classList.add('black'))
        } else {
            header.classList.remove('fix');
            navLinks.forEach(i => i.classList.remove('black'))
        }
    }
    mobNav.addEventListener('click', showMobNav);

    navLinks.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            try {
                navLinks.forEach(i => i.classList.remove('active'));
                e.target.classList.add('active');
                let target = e.target.dataset.link;
                fixHeader(target);
                let block = document.querySelector(`.${target}`);
                changeBlock(block);
            } catch (error) {
                target = e.target.closest('.main-mobile__item').dataset.link;
                links.forEach(function (i) {
                    if (i.dataset.link == target) {
                        i.classList.add('active');
                    }
                })
                fixHeader(target);
                let block = document.querySelector(`.${target}`);
                changeBlock(block);
            }
            hideMobOnMain();

            setTimeout(function(){
                navList.classList.remove('show');
                mobNav.querySelector('span').classList.remove('active');
            },100)

            

        })
    })

    document.body.addEventListener('click', function(e){
        if(!e.target.classList.contains('nav__mob')){
            navList.classList.remove('show');
            mobNav.querySelector('span').classList.remove('active');
        } else {
            e.stopPropagation();
        }
    })


}
module.exports = navigate;