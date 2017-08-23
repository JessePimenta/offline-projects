$(document).ready(function() {
	$('#fullpage').fullpage({
    css3: true,
		scrollingSpeed: 1700,
		autoScrolling: true,
		fitToSection: false,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: true,
		interlockedSlides: false,
		dragAndMove: true,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: true,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,
    controlArrows: true,
		verticalCentered: true,
		sectionsColor : ['#000', '#fff'],
		paddingTop: '0em',
		paddingBottom: '0px',
		fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: true,
		parallax: true,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
    onLeave: function(index, nextIndex, direction){
		var leavingSection = $(this);

		//after leaving section 2
		if(index == 1 && direction =='down'){
			// alert("Going to section 2!");
      $('#console').css('opacity','0')
      $('#console').css('transition','2s')
		}

		else if(index == 2 && direction == 'up'){
			// alert("Going to section 1!");
      $('#console').css('opacity','1')
      $('#console').css('transition','2s')

		}
	},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
  });


});
