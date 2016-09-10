function responsiveMobileMenu() {
	$('.nav').each(function() {



		// $(this).children('ul').addClass('nav-menu'); // mark main menu list


		var $style = $(this).attr('nav-menu-style'); // get menu style
		if (typeof $style == 'undefined' || $style == false) {
			$(this).addClass('yoga'); // set yoga style if style is not defined
		} else {
			$(this).addClass($style);
		}

		/* 	width of menu list (non-toggled) */

		var $width = 0;

		$(this).find('ul li').each(function() {
			$width += $(this).outerWidth();
			//console.log($width);
		});

		// if modern browser

		if ($.support.leadingWhitespace) {
			// $(this).css('max-width', $width * 1.2 + 'px');
		}
		// 
		else {
			$(this).css('width', $width * 1.2 + 'px');
		}

	});
}

function getMobileMenu() {

	/* 	build toggled dropdown menu list */

	$('.nav').each(function() {
		var menutitle = $(this).attr("nav-menu-title");

		var $menulist = $(this).children('.nav-menu').html(); //原先的ul列表
		//console.log(menutitle);
		var $menucontrols = "<div class='nav-toggled-controls'></div><div class='nav-button'><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></div>";
		$(this).prepend("<div class='nav-toggled nav-closed'>" + $menucontrols + "<ul>" + $menulist + "</ul></div>");

	});
}

function adaptMenu() {

	/* 	toggle menu on resize */

	$('.nav').each(function() {
		// var $width = $(this).css('max-width');
		// $width = $width.replace('px', ''); 
		var $width = 768;
		//父级是navigation
		if ($(this).parent().width() < $width * 1.05) {
			$(this).children('.nav-menu').hide(0); //原先的隐藏
			$(this).children('.nav-toggled').show(0); //toggle栏显示
		} else {
			$(this).children('.nav-menu').show(0);
			$(this).children('.nav-toggled').hide(0);
		}
	});

}

$(function() {

	responsiveMobileMenu();
	getMobileMenu();
	adaptMenu();
	$('.slider1').bxSlider({
		mode: 'fade',
		captions: false,
		auto: true,
		pager: false,
		speed: 500
	});

	/* slide down mobile menu on click */

	$('.nav-toggled, .nav-toggled .nav-button').click(function() {
		if ($(this).is(".nav-closed")) {
			$(this).find('> ul').stop().show(300);
			$(this).removeClass("nav-closed");
		} else {
			$(this).find(' > ul').stop().hide(300);
			$(this).addClass("nav-closed");
		}

	});



});
/* 	hide mobile menu on resize */
$(window).resize(function() {
	adaptMenu();
});