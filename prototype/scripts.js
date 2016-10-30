document.addEventListener('DOMContentLoaded', function() {
    // Class manipulation helpers
    function hasClass(el, className) {
        return el.className.indexOf(className) != -1;
    }
    function addClass(el, className) {
        if (!hasClass(el, className)) el.className += ' ' + className;
    }
    function removeClass(el, className) {
        el.className = el.className.replace(' ' + className, '');
    }

    // Global namespace for internal variables
    window.vctr = {};

    // Header detached state handler
    var headerBlock = document.querySelector('.header');
    var headerDetachBreakpoint = 25;
    var headerDetachClass = 'header_detached';

    function headerDetachAdjustment() {
        if (window.pageYOffset > headerDetachBreakpoint) {
            addClass(headerBlock, headerDetachClass);
        } else {
            removeClass(headerBlock, headerDetachClass);
        }
    }

    // Header hidden state handler
    window.vctr.lastScrollPos = 0;
    window.vctr.isScrollDirectionDown = true;
    var headerHideBreakpoint = 100;
    var headerShowBreakpoint = 10;
    var headerStartingPoint = 0;
    var headerHiddenClass = 'header_hidden';
    var headerFixedClass = 'header_fixed';

    function headerHideAdjustment(lastScrollPos, isScrollDirectionDown) {
        var currentScrollPos = window.pageYOffset;

        // Check if scroll direction changed
        if (currentScrollPos > lastScrollPos != isScrollDirectionDown) {
            window.vctr.isScrollDirectionDown = currentScrollPos > lastScrollPos;
            headerStartingPoint = currentScrollPos;
        }

        // Hiding
        if (!hasClass(headerBlock, headerFixedClass) && isScrollDirectionDown && currentScrollPos - headerStartingPoint > headerHideBreakpoint) {
            addClass(headerBlock, headerHiddenClass);
        }

        // Showing
        if (!isScrollDirectionDown && headerStartingPoint - currentScrollPos > headerShowBreakpoint) {
            removeClass(headerBlock, headerHiddenClass);
        }

        // Update last scroll position
        window.vctr.lastScrollPos = currentScrollPos;
    }

    headerDetachAdjustment();

    window.addEventListener('scroll', function () {
        headerDetachAdjustment();
        headerHideAdjustment(window.vctr.lastScrollPos, window.vctr.isScrollDirectionDown);
    })


    // Video show/hide handlers
    var introBlock = document.querySelector('.intro');
    var introVideoModeClass = 'intro_video-mode';
    var introPlayButton = document.querySelector('.intro__play');
    var introCloseButton = document.querySelector('.intro__close');
    var vimeoPlayer = new Vimeo.Player(document.querySelector('.intro__iframe'));

    introPlayButton.addEventListener('click', function () {
        addClass(headerBlock, headerHiddenClass);
        headerShowBreakpoint = 300;
        addClass(introBlock, introVideoModeClass);
        vimeoPlayer.play();
    })

    introCloseButton.addEventListener('click', function () {
        removeClass(headerBlock, headerHiddenClass);
        headerShowBreakpoint = 10;
        removeClass(introBlock, introVideoModeClass);
        vimeoPlayer.pause();
    })


    // Courses list expand/collapse
    var coursesBlock = document.querySelector('.courses');
    var coursesExpandedClass = 'courses_expanded';
    var coursesOpenButton = document.querySelector('.courses__link');
    var coursesCloseButton = document.querySelector('.courses__close');

    coursesOpenButton.addEventListener('click', function () {
        addClass(coursesBlock, coursesExpandedClass);
        addClass(headerBlock, headerHiddenClass);
        headerShowBreakpoint = 300;
    })

    coursesCloseButton.addEventListener('click', function () {
        removeClass(coursesBlock, coursesExpandedClass);
        removeClass(headerBlock, headerHiddenClass);
        headerShowBreakpoint = 10;
    })


    // Top nav open/close button
    var navBlock = document.querySelector('.nav')
    var navExpandedClass = 'nav_expanded';
    var menuButton = document.querySelector('.menu-button');
    var menuButtonPressedClass = 'menu-button_pressed';

    menuButton.addEventListener('click', function () {
        if (!hasClass(navBlock, navExpandedClass)) {
            addClass(headerBlock, headerFixedClass);
            addClass(navBlock, navExpandedClass);
            addClass(menuButton, menuButtonPressedClass);
        } else {
            removeClass(headerBlock, headerFixedClass);
            removeClass(navBlock, navExpandedClass);
            removeClass(menuButton, menuButtonPressedClass);
        }
    })
});
