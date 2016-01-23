(function ($) {
    'use strict';

    Drupal.behaviors.d8_materialize = {
        attach: function (context, settings) {

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

            $('.parallax').once('d8_materialize').parallax();

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

            // Sticky Navigation.
            $(window).scroll(function () {
                var topnav = $('.site-logo img').position();
                var topdistance = topnav.top
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
                hoursObject.text(-(hours));
                minutesObject.text(-(minutes));
                secondsObject.text(-(seconds));
            }

            // Backwards counter.
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
            // End timer.

            // Select form items.
            $('select', context).material_select();
        }
    }

    $(document).ready(function () {
        $('.frontnavigation li > a').click(function () { // Menu scrolltop effect
            var $this = $(this).attr('rel');
            $('html, body').animate({
                scrollTop: $($this).offset().top - 180
            }, 1000);
        });

        if ($(window).width() <= 600) {
            $('.home-counter .labels-container .label').each(function () {
                var t = $(this).text().slice(0, 1);
                $(this).text(t);
            });
        }
    }); // document.ready
})(jQuery);
