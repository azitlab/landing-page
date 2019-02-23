$(document).ready(function(){
    $headerElement = $('#page-header');
    $heroSection = $('#hero-section');

    $fixedScrollToTop = $('#scroll-top-btn');

    // Initial State Of The MenuBar And Scroll To Top Button
    if($(document).scrollTop() > $heroSection.outerHeight() - 50){
        if(!$headerElement.hasClass('show-bg')){
            $headerElement.addClass('show-bg');
        }

        if(!$fixedScrollToTop.hasClass('active')){
            $fixedScrollToTop.addClass('active');
        }

    }

    // Add Active Class
    $(window).on('scroll', function(e){
        /* Heading and scroll top button animation*/
        if($(document).scrollTop() > $heroSection.outerHeight() - 50){
            if(!$headerElement.hasClass('show-bg')){
                $headerElement.addClass('show-bg');
            }

            if(!$fixedScrollToTop.hasClass('active')){
                $fixedScrollToTop.addClass('active');
            }

        } else {
            if($headerElement.hasClass('show-bg')){
                $headerElement.removeClass('show-bg');
            }

            if($fixedScrollToTop.hasClass('active')){
                $fixedScrollToTop.removeClass('active');
            }
        }

        /* ===== PROFILE SCROLL EVENT ===== */
        /*
         * Trigger animation effect on some of profile element
         * */
        var $technologiesAnchor = $('#technologies-anchor');
        var $workingAnchor = $('#working-anchor');
        var $portfolioAnchor = $('#portfolio-anchor');

        if( $(document).scrollTop() > $technologiesAnchor.offset().top - $(window).height()/1.5){
            $progressBarList = $('.progress-bar');
            $progressBarList.each(function(index, value) {
                var a = $(value).data();
                $(value).css('width', a.style);
            });
        }

        if( $(document).scrollTop() > $workingAnchor.offset().top  - $(window).height()/1.5){
            var i = 0;
            $allMilestone = $('.working-history__timeline__milestone');
            $allMilestone.each(function(index, value) {
                setTimeout(function(){
                    $(value).addClass('active');
                }, 200 + i*950);
                i += 1;
            });
        }
    });


    /* ===== SMOOTH SCROLLING FEATURE =====
    * By - https://css-tricks.com/snippets/jquery/smooth-scrolling/
    * */
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 600, function() {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(':focus')) {
                            return false;
                        } else {
                            $target.attr('tabindex','-1');
                            $target.focus();
                        };
                    });
                }
            }
        });

    var $sliderObject = $('.profile-demo-slider');

    $sliderObject.on( 'init', function (slick){
        $activeSlide = $('.slick-current.slick-active');
        $activeSlide.find('.portfolio-information').addClass('active');
    });

    $sliderObject.slick({
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 800,
        arrows: true,
        prevArrow: '<i class="fa fa-arrow-left slider-arrow slider-arrow__prev" aria-hidden="true"></i>\n',
        nextArrow: '<i class="fa fa-arrow-right slider-arrow slider-arrow__next" aria-hidden="true"></i>\n',
        pauseOnFocus: true,
        pauseOnHover: true,
        swipeToSlide: true,
        fade: true,
        cssEase: 'ease-out'
    });

    $sliderObject.on( 'reInit', function (slick){
        $activeSlide = $('.slick-current.slick-active');
        $activeSlide.find('.portfolio-information').addClass('active');
    });

    $sliderObject.on( 'afterChange', function (slick, currentSlide){
        $activeSlide = $('.slick-current.slick-active');
        $allSlide = $('.slick-slide:not(.slick-current.slick-active)');
        $activeSlide.find('.portfolio-information').addClass('active');
        $allSlide.find('.portfolio-information').removeClass('active');
    });
});