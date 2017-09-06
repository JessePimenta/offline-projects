$(document).ready(function() {

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

  $('#newsletterLink').click(function(){
    count +=1;
    console.log(count + "newsletter count");
    if (count % 2 || switchCount % 2) {
      $('.offlineProjectsText').css('display', 'none');
      $('.onlineProjectsText').css('display', 'none');
      $('.newsletterText').css('display', 'block');

    }
    else {
      // $('.newsletterText').css('display', 'none');
    }
  })

  $('#off').click(function() {
    switchCount += 1;
    console.log(switchCount + "switch count");

    if (switchCount % 2) {
      $('#msg1').css('display', 'none');
      $('#msg2').css('display', 'none');
      $('.offlineProjectsText').css('display', 'none');
      $('.onlineProjectsText').css('display', 'block');
      $('.onlineProjectsText').css('color', 'black');
      $('#carat2').css('filter', 'invert(100%)');
      $('.buzz_wrapper').css('height','760px')
      $('#contact').css('color', 'black');
      $('#work').css('color', 'black');
      $('header').css('color', 'black');
      $('.contentBox').css('border-color', 'black');
      $('video').css('filter', 'invert(100%)');
      $('video').css('opacity', '1');
      $('#workText').css("display", "none")
      $('#op-head').css("display", "none")
      $('.ol-head').css("display", "block")
      $('#upcomingText').css("display", "block")
      $('#logo').css('filter', 'invert(100%)')
      $('#media-kit').css('display', 'none')
      $('#media-pdf').css('display', 'none')
      $('#upcoming-link').css('display', "block")
      $('#homeText').css('color', 'black');
      $('#carat3').css('color', 'black');
      $('#upcoming-link').css('color', 'black')
      $('.form-container').css('display', 'block')
      $('.contentBox2').css('color', 'black');
      $('.newsletterText').css('color', 'black');


    }

    else {
      $('#logo').css('filter', 'invert(0%)')
      $('#op-head').css("display", "block")
      $('.ol-head').css("display", "none")
      $('.buzz_wrapper').css('height','1050px')
      $('#carat2').css('filter', 'invert(0%)');
      $('.contentBox2').css('color', 'white');
      $('#carat3').css('color', 'white');
      $('#msg').css('display', 'none');
      $('#upcomingText').css("display", "none")
      $('#workText').css("display", "block")
      $('.onlineProjectsText').css('display', 'none');
      $('.offlineProjectsText').css('display', 'block');
      $('video').css('filter', 'invert(0%)');
      $('.onlineProjectsText').css('color', 'white');
      $('#contact').css('color', 'white');
      $('#work').css('color', 'white');
      $('#homeText').css('color', 'white');
      $('header').css('color', 'white')
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
    resetSliders: false,
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

      if (index == 1 && direction == 'down') {
        $('#console').css('opacity', '0')
        $('#console').css('transition', '2s')

      } else if (index == 2 && direction == 'up') {
        $('#fullpage').animate({
          transform: "translate3d(0px, 0px, 0px)"
        }, 100)
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

  $('#contact, #carat').click(function() {
    $.fn.fullpage.moveSlideLeft();
  })
  $('#work, #carat2').click(function() {
    $.fn.fullpage.moveSlideRight();
  })
  $('#carat4').click(function() {
    $.fn.fullpage.moveSectionUp();
  })
  $('#homeText, #carat3, .homeLink').click(function() {
    $.fn.fullpage.moveSlideLeft();
  })
});
