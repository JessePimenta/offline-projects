$(document).ready(function() {

  $('#button').mouseenter(function(){
    $('#msg1').css('display','none');
    $('#msg2').css('display','none');
    $('.onlineProjectsText').css('display','block');
    $('.onlineProjectsText').css('color','black');
    $('#contact').css('color','black');
    $('#work').css('color','black');
    $('header').css('color','black');
    $('.contentBox').css('border-color','black');
    $('video').css('filter','invert(100%)');
    $('video').css('opacity','1');

  })
  $('#button').mouseleave(function(){
    $('#msg1').css('display','block');
    $('#msg2').css('display','block');
    $('.onlineProjectsText').css('display','none');
    $('video').css('filter','invert(0%)');
    $('.onlineProjectsText').css('color','white');
    $('#contact').css('color','white');
    $('#work').css('color','white');
    $('header').css('color','white')
    $('.contentBox').css('border-color','white');
    $('video').css('opacity','.1');


  })




	$('#fullpage').fullpage({
    css3: true,
		scrollingSpeed: 1700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 100,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: true,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: true,
    scrollHorizontallyKey: 'MC4wLjAuMF9kTVNjMk55YjJ4c1NHOXlhWHB2Ym5SaGJHeDVkWU0=',
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
    slidesNavigation: false,
    slidesNavPosition: 'bottom',
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,
    controlArrows: false,
    anchors:['firstPage', 'secondPage', 'thirdPage'],
		verticalCentered: true,
		sectionsColor : ['#000', '#000'],
		paddingTop: '1px',
		paddingBottom: '0px',
		fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: true,
    keyboardScrolling: true,
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
      $('#fullpage').animate({
        transform: "translate3d(0px, 0px, 0px)"
      },100)
      console.log('is this working');
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

$('#contact').click(function(){
  $.fn.fullpage.moveSectionDown();
})
$('#work').click(function(){
  $.fn.fullpage.moveSlideRight();
})
$('#home').click(function(){
  $.fn.fullpage.moveSectionUp();
})
});
