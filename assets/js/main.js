(function ($) {
"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile_menu',
	meanScreenWidth: "991"
});

$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 200) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});

//mobile side menu
$('.side-toggle').on('click', function () {
	$('.side-info').addClass('info-open');
	$('.offcanvas-overlay').addClass('overlay-open');
})

$('.side-info-close,.offcanvas-overlay').on('click', function () {
	$('.side-info').removeClass('info-open');
	$('.offcanvas-overlay').removeClass('overlay-open');
})

/*------------------------------------
	Slider
--------------------------------------*/
if (jQuery(".slider-active").length > 0) {
	let sliderActive1 = '.slider-active';
	let sliderInit1 = new Swiper(sliderActive1, {
		// Optional parameters
		slidesPerView: 1,
		slidesPerColumn: 1,
		paginationClickable: true,
		loop: true,
		effect: 'fade',

		autoplay: {
			delay: 5000,
		},

		// If we need pagination
        pagination: {
			el: ".gofintech-swiper-pagination",
			clickable: true,
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		a11y: false
	});

	function animated_swiper(selector, init) {
		let animated = function animated() {
			$(selector + ' [data-animation]').each(function () {
				let anim = $(this).data('animation');
				let delay = $(this).data('delay');
				let duration = $(this).data('duration');

				$(this).removeClass('anim' + anim)
					.addClass(anim + ' animated')
					.css({
						webkitAnimationDelay: delay,
						animationDelay: delay,
						webkitAnimationDuration: duration,
						animationDuration: duration
					})
					.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
						$(this).removeClass(anim + ' animated');
					});
			});
		};
		animated();
		// Make animated when slide change
		init.on('slideChange', function () {
			$(sliderActive1 + ' [data-animation]').removeClass('animated');
		});
		init.on('slideChange', animated);
	}

	animated_swiper(sliderActive1, sliderInit1);
}

const project_slider = new Swiper(".gofintech_project_container", {
	slidesPerView: 2,
	centeredSlides: true,
	spaceBetween: 60,
	grabCursor: true,
	observer: true,
	observeParents: true,
	loop: true,
	pagination: {
	  el: ".gofintech_projects_pagination",
	  clickable: true,
	},
	navigation: {
		nextEl: ".gofintech_projects_next",
		prevEl: ".gofintech_projects_prev",
	  },
	  breakpoints: {
		320: {
			slidesPerView: 1,
			centeredSlides: true,
			grabCursor: false,
			},
		576: {
			slidesPerView: 1,
			centeredSlides: true,
			grabCursor: false,
		},
		768: {
			slidesPerView: 2,
		},
		993: {
			slidesPerView: 2,
		},
	}
  });



// gofintech_testimonial_spage_active

const gofintech_testimonial_spage_active = new Swiper(".gofintech_testimonial_spage_active", {
	slidesPerView: 2,
	spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: ".gofintech_testimonial_spage_next",
		prevEl: ".gofintech_testimonial_spage_prev",
	  },
	  breakpoints: {
		0: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 1,
		},
		992: {
			slidesPerView: 2,
		},
	}
  });



  // portfolio details
  if (jQuery(".recent-project-active-1").length > 0) {
	let swiperrecent = new Swiper('.recent-project-active-1', {
		slidesPerView: 3,
		spaceBetween: 5,
		// direction: 'vertical',
		loop: true,
		centeredSlides: true,
		infinite: false,
		grabCursor: true,
		autoplay: {
			delay: 2000,
		},

		// If we need pagination
		pagination: {
			el: '.recent-swiper-pagination',
			clickable: true,
		},

		// Navigation arrows
		navigation: {
			nextEl: '.recent-swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		// And if we need scrollbar
		scrollbar: {
			el: '.recent-scrollbar',
			dynamicBullets: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
				},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 2,
			},
			1199: {
				slidesPerView: 2,
			},
		}

	});
}


// Active Odometer Counter 
jQuery('.odometer').appear(function (e) {
	var odo = jQuery(".odometer");
	odo.each(function () {
		var countNumber = jQuery(this).attr("data-count");
		jQuery(this).html(countNumber);
	});
});



// Testimonial slider active

const slider_thumb = new Swiper('.gofintech_testimonial_thumbs_active', {
	loop: true,
	spaceBetween: 5,
	slidesPerView: 3,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 3,
		},
		993: {
			slidesPerView: 3,
		},
	}
});

const slider3 = new Swiper('.gofintech_testimonial_message_active', {
	loop: true,
	spaceBetween: 30,
	slidesPerView: 1,
	effect: 'fade',
	fadeEffect: {
	  crossFade: true
	},
	navigation: {
		nextEl: ".gofintech_testimonial_next",
		prevEl: ".gofintech_testimonial_prev",
	  },
	pagination: {
		el: ".gofintech_testimonial_pagination",
	  },
	thumbs: {
	  swiper: slider_thumb,
	},
});


const brand_active = new Swiper('.gofintech_brand_active', {
	loop: true,
	slidesPerView: 4,

	breakpoints: {
		320: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		993: {
			slidesPerView: 4,
		},
	}
});

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


$('.gofintech_free_consultaion_wrapper select, .gofintech_contact_form select').niceSelect();

// data background
$("[data-background").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})

// data width
$("[data-width]").each(function(){
	$(this).css("width",$(this).attr("data-width"))
})

// data background color
$("[data-bg-color]").each(function(){
	$(this).css("background-color",$(this).attr("data-bg-color"))
})


//for menu active class
$('.portfolio_nav button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});


// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();

var navexpander = $('#nav-expander, #nav-expander2');
if(navexpander.length){
	$('#nav-expander, #nav-expander2, #nav-close, #nav-close2, .offwrap').on('click',function(e){
		e.preventDefault();
		$('body').toggleClass('nav-expanded');
	});
}


})(jQuery);