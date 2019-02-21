console.log('\'Allo \'Allo!');

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });

$(document).ready(function(){
    $headerElement = $('#page-header');
    $heroSection = $('#hero-section');

    $fixedScrollToTop = $('#scroll-top-btn');

    // Initial State Of The MenuBar And Scroll To Top Button
    if($(document).scrollTop() > $heroSection.outerHeight() - 50){
        console.log('add class');
        if(!$headerElement.hasClass('show-bg')){
            $headerElement.addClass('show-bg');
        }

        if(!$fixedScrollToTop.hasClass('active')){
            $fixedScrollToTop.addClass('active');
        }

    }

    // Add Active Class
    $(window).on('scroll', function(e){
        if($(document).scrollTop() > $heroSection.outerHeight() - 50){
            console.log('add class');
            if(!$headerElement.hasClass('show-bg')){
                $headerElement.addClass('show-bg');
            }

            if(!$fixedScrollToTop.hasClass('active')){
                $fixedScrollToTop.addClass('active');
            }

        } else {
            console.log('remove class');
            if($headerElement.hasClass('show-bg')){
                $headerElement.removeClass('show-bg');
            }

            if($fixedScrollToTop.hasClass('active')){
                $fixedScrollToTop.removeClass('active');
            }
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
});