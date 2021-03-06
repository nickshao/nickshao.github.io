$(document).ready(function () {
  $('a.blog-button').click(function (e) {
    $('.main-post-list').show()
    $('.about-me').hide() 
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    currentWidth = $('.panel-cover').width()
    if (currentWidth > 960) {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
      $('.panel-cover').addClass('panel-cover--collapsed')
    }
  })
  $('a.about-button').click(function (e) {
    $('.main-post-list').hide()
    $('.about-me').show()
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    currentWidth = $('.panel-cover').width()
    if (currentWidth > 960) {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
      $('.panel-cover').addClass('panel-cover--collapsed')
    }
  })

  /*if (window.location.hash && window.location.hash == 'about-me') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }*/

  if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

})
