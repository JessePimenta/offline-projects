$(document).ready(function() {

  $('#button').click(function() {
    $('#msg1').css('display', 'none');
    $('#msg2').css('display', 'none');
    $('.onlineProjectsText').css('display', 'block');
    $('.onlineProjectsText').css('color', 'black');
    $('#contact').css('color', 'black');
    $('#work').css('color', 'black');
    $('header').css('color', 'black');
    $('.contentBox').css('border-color', 'black');
    $('video').css('filter', 'invert(100%)');
    $('video').css('opacity', '1');
    $('#workText').css("display", "none")
    $('#upcomingText').css("display", "block")
    $('#logo').css('filter', 'invert(100%)')
    $('#media-kit').css('display','none')
    $('#media-pdf').css('display','none')
    $('#upcoming-link').css('display', "block")
    $('#homeText').css('color', 'black');
    $('#carat3').css('color', 'black');
    $('#backToHome').css('marginTop', '-168px');
    $('#upcoming-link').css('color','black')
    $('.form-container').css('display','block')

  })
  $('#button2').click(function() {
    $('#logo').css('filter', 'invert(0%)')
    $('#backToHome').css('marginTop', '272px');
    $('#msg1').css('display', 'block');
    $('#carat3').css('color', 'white');
    $('#upcomingText').css("display", "none")
    $('#workText').css("display", "block")
    $('#msg2').css('display', 'block');
    $('.onlineProjectsText').css('display', 'none');
    $('video').css('filter', 'invert(0%)');
    $('.onlineProjectsText').css('color', 'white');
    $('#contact').css('color', 'white');
    $('#work').css('color', 'white');
    $('#homeText').css('color', 'white');
    $('header').css('color', 'white')
    $('.contentBox').css('border-color', 'white');
    $('video').css('opacity', '1');
    $('#upcoming-link').css('color','white')
    $('.form-container').css('display','none')
    $('#media-kit').css('display','block')
    $('#media-pdf').css('display','block')


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
      'home', 'connect',
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

      //after leaving section 2
      if (index == 1 && direction == 'down') {
        // alert("Going to section 2!");
        $('#console').css('opacity', '0')
        $('#console').css('transition', '2s')

      } else if (index == 2 && direction == 'up') {
        // alert("Going to section 1!");
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
    $.fn.fullpage.moveSectionDown();
  })
  $('#work, #carat2').click(function() {
    $.fn.fullpage.moveSlideRight();
  })
  $('#carat4').click(function() {
    $.fn.fullpage.moveSectionUp();
  })
  $('#homeText, #carat3').click(function() {
    $.fn.fullpage.moveSlideRight();
  })
});
