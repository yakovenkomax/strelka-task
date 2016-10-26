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
    var headerDetachBreakpoint = 150;
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

    function headerHideAdjustment(lastScrollPos, isScrollDirectionDown) {
        var currentScrollPos = window.pageYOffset;

        // Check if scroll direction changed
        if (currentScrollPos > lastScrollPos != isScrollDirectionDown) {
            window.vctr.isScrollDirectionDown = currentScrollPos > lastScrollPos;
            headerStartingPoint = currentScrollPos;
        }

        // Hiding
        if (isScrollDirectionDown && currentScrollPos - headerStartingPoint > headerHideBreakpoint) {
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
    var ctaBlock = document.querySelector('.intro__cta');
    var ctaHiddenClass = 'intro__cta_hidden';
    var videoShowButton = document.querySelector('.intro__play');
    var videoHideButton = document.querySelector('.intro__close');
    var videoBlock = document.querySelector('.intro__video');
    var videoHiddenClass = 'intro__video_hidden';
    // var vimeoPlayer = new Vimeo.Player(document.querySelector('.intro__iframe'));

    videoShowButton.addEventListener('click', function () {
        addClass(headerBlock, headerHiddenClass);
        headerShowBreakpoint = 250;
        addClass(ctaBlock, ctaHiddenClass);
        removeClass(videoBlock, videoHiddenClass);
        vimeoPlayer.play();
    })

    videoHideButton.addEventListener('click', function () {
        removeClass(headerBlock, headerHiddenClass);
        headerShowBreakpoint = 10;
        removeClass(ctaBlock, ctaHiddenClass);
        addClass(videoBlock, videoHiddenClass);
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
        headerShowBreakpoint = 250;
    })

    coursesCloseButton.addEventListener('click', function () {
        removeClass(coursesBlock, coursesExpandedClass);
        removeClass(headerBlock, headerHiddenClass);
        headerShowBreakpoint = 10;
    })
});
