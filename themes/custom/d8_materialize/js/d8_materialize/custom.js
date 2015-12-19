jQuery(document).ready(function() {
    jQuery('.button-collapse').sideNav();
    jQuery('.parallax').parallax();

    // Sticky Navigation.
    jQuery(window).scroll(function() {
        var topnav = jQuery('.site-logo img').position();
        var topdistance = topnav.top
        var scroll = jQuery(window).scrollTop();
        stickyNav(topdistance, scroll);
    });
    function stickyNav(t, s) {
        if(t < s) {
            //console.log('activate');
            jQuery('.top-nav').addClass('sticky').removeClass('no-sticky');
        } else if(s === 0) {
            //console.log('deactivate');
            jQuery('.top-nav').removeClass('sticky').addClass('no-sticky');
        }
    }

    // Backwards counter.
    origin = moment("2016-04-07 09:00:00", "YYYY-MM-DD HH:mm:ss");
    daysObject = jQuery('.days-counter');
    hoursObject = jQuery('.hours-counter');
    minutesObject = jQuery('.minutes-counter');
    secondsObject = jQuery('.second-counter');
    function calculateTime() {
        days = moment().diff(origin, 'days');
        hours = moment().diff(origin, 'hours');
        hours = hours-(days*24);

        minutes = moment().diff(origin, 'minutes');
        minutes = minutes-(days*1440)-(hours*60);

        seconds = moment().diff(origin, 'seconds');
        seconds -= (days*86400);
        seconds -= (hours*3600);
        seconds -= (minutes*60);

        daysObject.text(-(days));
        hoursObject.text(-(hours));
        minutesObject.text(-(minutes));
        secondsObject.text(-(seconds));
    }
    setInterval(function() {
        calculateTime();
    }, 1000);

});
