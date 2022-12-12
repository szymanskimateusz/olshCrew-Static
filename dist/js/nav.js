const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
const navLink = document.querySelectorAll('.menu-nav__link');

const sectionHome = document.querySelector('.home');
const sectionAbout = document.querySelector('.about');
const sectionCrew = document.querySelector('.crew');
const sectionSpots = document.querySelector('.spots');
const sectionContact = document.querySelector('.contact');

let showMenu = false;
active0();

menuBtn.addEventListener('click', toggleMenu);

// window.addEventListener('scroll', function(){
//     nav.classList.toggle('scrolled', this.window.scrollY > 100);
// })


function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    }

    else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}

navLink[0].addEventListener('click', active0);
navLink[1].addEventListener('click', active1);
navLink[2].addEventListener('click', active2);
navLink[3].addEventListener('click', active3);
navLink[4].addEventListener('click', active4);

function active0() {
    navLink[0].classList.add('active');
    navLink[1].classList.remove('active');
    navLink[2].classList.remove('active');
    navLink[3].classList.remove('active');
    navLink[4].classList.remove('active');
    
    closeMenuAfterClick();
}

function active1() {
    navLink[1].classList.add('active');
    navLink[0].classList.remove('active');
    navLink[2].classList.remove('active');
    navLink[3].classList.remove('active');
    navLink[4].classList.remove('active');
    
    closeMenuAfterClick();
}

function active2() {
    navLink[2].classList.add('active');
    navLink[1].classList.remove('active');
    navLink[0].classList.remove('active');
    navLink[3].classList.remove('active');
    navLink[4].classList.remove('active');

    closeMenuAfterClick();
}

function active3() {
    navLink[3].classList.add('active');
    navLink[1].classList.remove('active');
    navLink[2].classList.remove('active');
    navLink[0].classList.remove('active');
    navLink[4].classList.remove('active');

    closeMenuAfterClick();
}

function active4() {
    navLink[4].classList.add('active');
    navLink[1].classList.remove('active');
    navLink[2].classList.remove('active');
    navLink[3].classList.remove('active');
    navLink[0].classList.remove('active');

    closeMenuAfterClick();
}
    

function closeMenuAfterClick() {
    if (showMenu) {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}

//Scrolling

//home

const sectionHomeOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const sectionHomeObserver = new IntersectionObserver (
    function (
        entries,
        sectionHomeObserver
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                nav.classList.add('scrolled');
                active1();
            }

            else {
                nav.classList.remove('scrolled');
                active0();
            }
        });
    },
sectionHomeOptions);

sectionHomeObserver.observe(sectionHome);

//about

const sectionAboutOptions = {
    // rootMargin: "-100px 0px 0px 0px"
};

const sectionAboutObserver = new IntersectionObserver (
    function (
        entries,
        sectionAboutObserver
    ) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                active1();
            }
        });
    },
sectionAboutOptions);

sectionAboutObserver.observe(sectionAbout);

//crew

const sectionCrewOptions = {
    // rootMargin: "-20px 0px 0px 0px"
};

const sectionCrewObserver = new IntersectionObserver (
    function (
        entries,
        sectionCrewObserver
    ) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                active2();
            }
        });
    },
sectionCrewOptions);

sectionCrewObserver.observe(sectionCrew);

//spots

const sectionSpotsOptions = {
    // rootMargin: "-20px 0px 0px 0px"
};

const sectionSpotsObserver = new IntersectionObserver (
    function (
        entries,
        sectionSpotsObserver
    ) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                active3();
            }
        });
    },
sectionSpotsOptions);

sectionSpotsObserver.observe(sectionSpots);

//contact

const sectionContactOptions = {
    // rootMargin: "-20px 0px 0px 0px"
};

const sectionContactObserver = new IntersectionObserver (
    function (
        entries,
        sectionContactObserver
    ) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                active4();
            }
        });
    },
sectionContactOptions);

sectionContactObserver.observe(sectionContact);

const lightt = document.getElementById('light');

