(function ($) {
    'use strict';

    Drupal.behaviors.d8_materialize = {
        attach: function (context, settings) {

            // Homepage Animation.
            /////////////////////
            function animateDateImages() {
                var images = jQuery('.date-camp img');
                jQuery.each(images, function (i , v) {
                    jQuery(v).delay(100 * i).fadeTo(200, 1);
                });
            }

            function animateFireCamp() {
                jQuery('.fighter-camp img').delay(200).fadeTo(100, 1);
            }

            function homePageAnimation() {
                animateFireCamp();
                setTimeout(function() {
                    animateDateImages();
                }, 500);
            }

            $.fn.BodyReady = function () {
                homePageAnimation();
            };

            $('body.path-frontpage').once('d8_materialize').BodyReady();

            // Sticky Navigation.
            ////////////////////
            $(window).scroll(function () {
                var topnav = $('.branding-block img').position();
                var topdistance = topnav.top;
                var scroll = $(window).scrollTop();
                stickyNav(topdistance, scroll);
            });
            function stickyNav(t, s) {
                if (t < s) {
                    $('.top-nav').addClass('sticky').removeClass('no-sticky');
                } else if (s === 0) {
                    $('.top-nav').removeClass('sticky').addClass('no-sticky');
                }
            }

            // Backwards counter.
            ////////////////////
            function calculateTime() {
                var days = moment().diff(origin, 'days');
                var hours = moment().diff(origin, 'hours');
                hours = hours - (days * 24);

                var minutes = moment().diff(origin, 'minutes');
                minutes = minutes - (days * 1440) - (hours * 60);

                var seconds = moment().diff(origin, 'seconds');
                seconds -= (days * 86400);
                seconds -= (hours * 3600);
                seconds -= (minutes * 60);

                daysObject.text(-(days));
                (hours == 1) ? hoursObject.text((hours)) : hoursObject.text(-(hours));
                minutesObject.text(-(minutes));
                secondsObject.text(-(seconds));
            }

            var origin = moment("2016-04-07 09:00:00", "YYYY-MM-DD HH:mm:ss");
            var daysObject = $('.days-counter');
            var hoursObject = $('.hours-counter');
            var minutesObject = $('.minutes-counter');
            var secondsObject = $('.second-counter');

            if (typeof(moment) != "undefined") {
                setInterval(function () {
                    calculateTime();
                }, 1000);
            }

            // Scroll Animation homepage.
            ////////////////////////////
            $('.path-frontpage .menu--main a', context).bind('click', function(event) {
                if(event.currentTarget.hash) { // If current element has hash and its front page.
                    event.preventDefault();
                    $('html, body', context).animate({
                        scrollTop: $(event.currentTarget.hash).offset().top - 180
                    }, 1000);
                }
            });

            // Materialize triggers.

            ///////////////////////
            // Select form items.
            $('select', context).material_select();
            $('.parallax').once('d8_materialize').parallax();

            // Side navigation.
            var button_collapse = $('.button-collapse');
            button_collapse.once('d8_materialize').sideNav();
            button_collapse.click(function () {
                var sideover = $('#sidenav-overlay').is(':visible');
                if (sideover) {
                    $('.top-nav').removeClass('sticky').addClass('no-sticky');
                } else if (!sideover) {
                    $('.top-nav').addClass('sticky').removeClass('no-sticky');
                }
            }).once('d8_materialize');

        }
    };

    $(document).ready(function () {
        // Shorten the time letters for mobile.
        ///////////////////////////////////////
        if ($(window).width() <= 600) {
            $('.home-counter .labels-container .label').each(function () {
                var t = $(this).text().slice(0, 1);
                $(this).text(t);
            });
        }
        $(".dropdown-button").once('d8_materialize').dropdown({
            belowOrigin: true
        });

    }); // document.ready
})(jQuery);
