$(window).load(function() {


	if ($(this).height() > 710 && $(this).innerWidth() > 480 ) {
		// $(".contentBox").css('height', '59%')
		$('img#whiteArrow3').css('right','65px')
	}

  if ($(this).height() < 710 && $(this).innerWidth() >= 480 ) {
    $(".contentBox").css('height', '59%')
  }
})



$(document).ready(function() {

  $(window).resize(function() {
    if (this.resizeTO)
      clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
      $(this).trigger('resizeEnd');
    }, 500);

    if ($(this).height() < 710) {
      $(".contentBox").css('height', '59%')
    } else {
      $(".contentBox").css('height', '62%')

    }
    console.log('window height: ' + $(this).height())
  });

  $(window).bind('resizeEnd', function() {
    // $(".contentBox").text($(this).width());
    // $("#height").text($(this).height());

  });

  var vids = $("video");
  $.each(vids, function() {
    this.controls = false;
  });

  var count = 0;
  var switchCount = 0
  console.log(count);
  //  lightswitch img src ternary switch
  $('#off').on({
    'click': function() {
      var src = ($(this).attr('src') === 'assets/OnOff-11.png')
        ? 'assets/OnOff_White-11.png'
        : 'assets/OnOff-11.png';
      $(this).attr('src', src);
    }
  });

  // switching content based on odd/even clicks

  $('#opxlogo').click(function() {
    count += 1;
    console.log(count + "newsletter count");
    if (count % 2 || switchCount % 2) {
      $('.offlineProjectsText').fadeOut('slow')
      $('.onlineProjectsText').fadeOut('slow');
      $('.newsletterText').delay(800).fadeIn('slow');
      $('.newsletterText').delay(800).fadeIn('slow')
    } else {
      // $('.newsletterText').css('display', 'none');
    }
  })

  $('#off').click(function() {
    switchCount += 1;
    console.log(switchCount + "switch count");

    if (switchCount % 2) {
      $('.newsletterText').css('display', 'none');
      $('#msg1').css('display', 'none');
      $('#msg2').css('display', 'none');
      $('.offlineProjectsText').fadeOut("fast")
      // $('.onlineProjectsText').css('display', 'block');
      $('header').css('color', 'black');
      $('.onlineProjectsText').css('color', 'black');
      $('.onlineProjectsText').delay(400).fadeIn('slow');
      $('#subcopy').delay(800).fadeIn('slow');
      $('#carat2').css('filter', 'invert(100%)');
      $('#mc_embed_signup input.email').css('border-color', 'black')
      // $('input.email').attr('placeholder').css('color','black')
      $('input.email').addClass('inputChange');
      $('#mc_embed_signup .button').css('border-color', 'black')
      $('#mc_embed_signup .button').css('color', 'black')
      $('#opxsub').css('color', 'black')
      $('#opxlink').css('color', 'black')
      $('#mc_embed_signup input.email').css('color', 'black')
      $('.buzz_wrapper').css('height', '760px')
      $('#contact').css('color', 'black');
      $('#work').css('color', 'black');
      $('.contentBox').css('border-color', 'black');
      $('video').css('filter', 'invert(100%)');
      $('video').css('opacity', '1');
      $('#workText').css("display", "none")
      $('#op-head').css("display", "none")
      $('.ol-head').css("display", "block")
      $('#upcomingText').css("display", "block")
      $('#logo').css('filter', 'invert(100%)')
      $('img#whiteArrow').css('filter', 'invert(100%)')
      $('img#whiteArrow2').css('filter', 'invert(100%)')
      $('img#whiteArrow3').css('filter', 'invert(100%)')
      $('#media-kit').css('display', 'none')
      $('#media-pdf').css('display', 'none')
      $('#upcoming-link').css('display', "block")
      $('#homeText').css('color', 'black');
      $('#carat3').css('color', 'black');
      $('#upcoming-link').css('color', 'black')
      $('.form-container').css('display', 'block')
      $('.contentBox2').css('color', 'black');
      $('.newsletterText').css('color', 'black');
      $('.media-container').css('padding-top', '0px')
      $('#opxlogo').css('filter', 'invert(0%)')
      $('#onlinep').fadeIn(400)

    } else {
      $('#logo').css('filter', 'invert(0%)')
      $('#opxlogo').css('filter', 'invert(100%)')
      $('#opxlink').css('color', 'white')
      $('#opxsub').css('color', 'white')

      // $('#subcopy0').delay( 800 ).fadeIn("slow")
      $('.media-container').css('padding-top', '250px')
      $('input.email').removeClass('inputChange');
      $('#mc_embed_signup .button').css('border-color', 'white')
      $('#mc_embed_signup .button').css('color', 'white')
      $('#mc_embed_signup .button').css('background', 'transparent')
      $('#mc_embed_signup input.email').css('color', 'white')
      $('#mce-EMAIL').css('border-color', 'white')
      $('.newsletterText').css('display', 'none');
      $('#op-head').css("display", "block")
      $('.ol-head').css("display", "none")
      $('.buzz_wrapper').css('height', '1050px')
      $('#carat2').css('filter', 'invert(0%)');
      $('img#whiteArrow').css('filter', 'invert(0%)');
      $('img#whiteArrow2').css('filter', 'invert(0%)');
      $('img#whiteArrow3').css('filter', 'invert(0%)');
      $('.contentBox2').css('color', 'white');
      $('#carat3').css('color', 'white');
      $('#msg').css('display', 'none');
      $('#upcomingText').css("display", "none")
      $('#workText').css("display", "block")
      $('header').css('color', 'white')
      $('.onlineProjectsText').fadeOut("fast")
      $('#onlinep').fadeOut("fast")
      $('.offlineProjectsText').delay(400).fadeIn("slow");
      $('video').css('filter', 'invert(0%)');
      $('.onlineProjectsText').css('color', 'white');
      $('#contact').css('color', 'white');
      $('#work').css('color', 'white');
      $('#homeText').css('color', 'white');
      $('.contentBox').css('border-color', 'white');
      $('video').css('opacity', '1');
      $('#upcoming-link').css('color', 'white')
      $('.form-container').css('display', 'none')
      $('#media-kit').css('display', 'block')
      $('#media-pdf').css('display', 'block')
      $('.newsletterText').css('color', 'white');

    }
  });

  $('#fullpage').fullpage({
    css3: true,
    scrollingSpeed: 1000,
    animateAnchor: true,
    recordHistory: false,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 0,
    fixedElements: '#op-head',
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: true,
    scrollHorizontallyKey: 'MC4wLjAuMF9kTVNjMk55YjJ4c1NHOXlhWHB2Ym5SaGJHeDVkWU0=',
    scrollHorizontally: false,
    interlockedSlides: true,
    dragAndMove: true,
    offsetSections: false,
    resetSliders: true,
    fadingEffect: true,
    normalScrollElements: '.contentBox, .contentBox2, .slide1, .contactInfo',
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',
    touchSensitivity: 100,
    normalScrollElementTouchThreshold: 15,
    bigSectionsDestination: null,
    controlArrows: false,
    anchors: [
      'home', 'connect'
    ],
    verticalCentered: true,
    sectionsColor: [
      '#000', '#000'
    ],
    paddingTop: '1px',
    paddingBottom: '0px',
    fixedElements: '#header',
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: true,
    keyboardScrolling: true,
    parallax: true,
    parallaxOptions: {
      type: 'reveal',
      percentage: 62,
      property: 'translate'
    },
    onLeave: function(index, nextIndex, direction) {
      var leavingSection = $(this);

      if (index == 1 && direction == 'left') {
        $('#console').css('opacity', '0')
        $('#console').css('transition', '2s')

      } else if (index == 2 && direction == 'right') {
        // $('#fullpage').animate({
        //   transform: "translate3d(0px, 0px, 0px)"
        // }, 100)
        $('#console').css('opacity', '1')
        $('#console').css('transition', '2s')

      }
    },
    afterLoad: function(anchorLink, index) {},
    afterRender: function() {},
    afterResize: function() {},
    afterResponsive: function(isResponsive) {},
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {},
    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {}
  });

  $('#contact, #carat,#homeText, #carat3, .homeLink').click(function() {
    $.fn.fullpage.moveSlideLeft();
  })
  $('#work, #carat2, .goBack').click(function() {
    $.fn.fullpage.moveSlideRight();
  })
  // $('#carat4').click(function() {
  //   $.fn.fullpage.moveSlideRight();
  // })
  // $('').click(function() {
  //   $.fn.fullpage.moveSlideLeft();
  // })
});
