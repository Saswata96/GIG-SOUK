// JavaScript Document


$(document).ready(function (e) {

	// for home slider
	$(".main-banner-slider").owlCarousel({
		nav: false,
		loop: true,
		dots: false,
		// autoplay: true,
		autoPlaySpeed: 5000,
		autoplayTimeout: 5000,
		// smartSpeed: 3000,
		singleItem: true,
		items: 1,
		itemsDesktop: false,
		itemsDesktopSmall: false,
		itemsTablet: false,
		itemsMobile: false,
	});
	$(".mobile-inner-image-slider").owlCarousel({
		margin: 0,
		nav: false,
		loop: true,
		animateOut: 'fadeOut',
		dots: false,
		autoplay: true,
		autoPlaySpeed: 5000,
		autoplayTimeout: 5000,
		// smartSpeed: 3000,
		singleItem: true,
		items: 1,
		itemsDesktop: false,
		itemsDesktopSmall: false,
		itemsTablet: false,
		itemsMobile: false,
	});
	// owl carousel slider 	
	var owl = $('.user-slider');
	owl.owlCarousel({
		margin: 15,
		nav: false,
		navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
		loop: true,
		autoplay: true,
		autoPlaySpeed: 1200,
		autoplayTimeout: 3700,
		smartSpeed: 3000,
		dots: true,
		singleItem: true,
		responsive: {
			0: {
				items: 1,
				"dotsEach": 1,
			},
			767: {
				items: 2,
				"dotsEach": 1,
			},
			1000: {
				items: 2,
				"dotsEach": 1,
			}
		}
	});

	//   nav js
	const navbarMenu = document.getElementById("menu");
	const burgerMenu = document.getElementById("burger");
	const bgOverlay = document.getElementById("overlay");

	// Show Menu when Click the Burger
	// Hide Menu when Click the Overlay
	if (burgerMenu && navbarMenu && bgOverlay) {
		burgerMenu.addEventListener("click", () => {
			navbarMenu.classList.toggle("is-active");
			bgOverlay.classList.toggle("is-active");
		});

		bgOverlay.addEventListener("click", () => {
			navbarMenu.classList.toggle("is-active");
			bgOverlay.classList.toggle("is-active");
		});
	}

	// Hide Menu when Click the Links
	document.querySelectorAll(".menu-link").forEach((link) => {
		link.addEventListener("click", () => {
			navbarMenu.classList.remove("is-active");
			bgOverlay.classList.remove("is-active");
		});
	});

	// sticky header section
	$(window).on('scroll', function () {
		if ($(window).scrollTop()) {
			$('.header').addClass('sticky');
		}
		else {
			$('.header').removeClass('sticky');
		}
	});

	// faq js
	const items = document.querySelectorAll('.accordion-total-section button');

	function toggleAccordion() {
		const itemToggle = this.getAttribute('aria-expanded');

		for (i = 0; i < items.length; i++) {
			items[i].setAttribute('aria-expanded', 'false');
		}

		if (itemToggle == 'false') {
			this.setAttribute('aria-expanded', 'true');
		}
	}

	items.forEach((item) => item.addEventListener('click', toggleAccordion));


	// for smooth scrolling

	if ($(window).width() < 576) {
		var headerHeight = 60
	}
	else {
		var headerHeight = 20

	}

	$("nav ul li a").on('click', function (event) {
		if (this.hash !== "") {
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top - headerHeight
			}, 500, function () {
				window.location.hash = hash;
				event.preventDefault();
			});
		} // End if

	});



});
//Scroll back to top

(function ($) {
	"use strict";

	$(document).ready(function () {
		"use strict";

		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function () {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});
		jQuery('.progress-wrap').on('click', function (event) {
			event.preventDefault();
			jQuery('html, body').animate({ scrollTop: 0 }, duration);
			return false;
		})


	});

})(jQuery);

// text change js
ScrollTrigger.defaults({
	markers: false
})

var points = gsap.utils.toArray('.point');
var indicators = gsap.utils.toArray('.indicator');

var height = 100 * points.length;

gsap.set('.indicators', { display: "flex" });

var tl = gsap.timeline({
	duration: points.length,
	scrollTrigger: {
		trigger: ".philosophie",

		//start: "top center",
		//end: "+="+height+"%",

		start: "top bottom",
		end: "+=" + height + "%",

		scrub: true,
		id: "points",
	}
})

var pinner = gsap.timeline({
	scrollTrigger: {
		trigger: ".philosophie .wrapper",
		start: "center center",  // <-------

		//end: "+="+height+"%",
		end: "+=" + height + "%",

		scrub: true,
		pin: ".content",  // <-------
		//pinSpacing: true,
		id: "pinning",
		markers: false
	}
})



points.forEach(function (elem, i) {
	gsap.set(elem, { position: "absolute", top: 0 });

	tl.to(indicators[i], { backgroundColor: "orange", duration: 0.25 }, i)
	tl.from(elem.querySelector('img'), { autoAlpha: 0 }, i)
	tl.from(elem.querySelector('article'), { autoAlpha: 0, translateY: 100 }, i)

	if (i != points.length - 1) {
		tl.to(indicators[i], { backgroundColor: "#adadad", duration: 0.25 }, i + 0.75)
		tl.to(elem.querySelector('article'), { autoAlpha: 0, translateY: -100 }, i + 0.75)
		tl.to(elem.querySelector('img'), { autoAlpha: 0 }, i + 0.75)
	}

});





wow = new WOW(
	{

		offset: 100
	}
);
wow.init();


new WOW().init();