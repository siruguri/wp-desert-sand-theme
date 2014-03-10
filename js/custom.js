$(document).ready(
    function() {
        /* Change left position of logo if the window is too narrow */
        if ($(window).width() < 450) {
	    $(".menu-header").css('display', 'none');
	} else { /* Don't show the phone navigation if the width is too big. */
	    $(".menu-outer-box").css('display', 'none');
	}
    }
);
