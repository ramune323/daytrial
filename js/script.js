/* swiper
--------------------- */
let mySwiper = new Swiper ('.swiper-container', {
  loop: true,
 
  pagination: { 
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
 
  navigation: { 
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 });


 /* wow
--------------------- */
new WOW().init();


 /* drawer
--------------------- */
$(document).ready(function() {
  $('.drawer').drawer();
});


 /* smooth-scroll
--------------------- */
$(function() {
  $('a[href^="#"]').click(function() {
    var speed = 500; // スクロールの速さ
    var href = $(this).attr("href"); // ジャンプ先を取得
    var target = $(href == "#" || "" ? 'html' : href); // リンク先が空白or#のみの場合、リンク先をhtmlに設定
    var position = target.offset().top - 50; // リンク先の座標を取得
    $("html, body").animate({scrollTop:position}, speed, "swing"); // スムーススクロールを実行
    return false;
  });
});

$(window).on("scroll", function() {
  if (100 < $(this).scrollTop()) {
    $('.to-top').fadeIn(500);
  }
  else {
    $('.to-top').fadeOut(500);
  }
});


 /* click
--------------------- */
$('.header-nav-item a').click(function() {
  $('.header-nav-item a').removeClass('is-active');
  $(this).addClass('is-active');
});


 /* accordion
--------------------- */
$('.qa-q').click(function() {
  $(this).next().slideToggle();
  $(this).children('.qa-icon').toggleClass( 'is-open' );
});


 /* modal
--------------------- */
$(function() {
  var scrollPosition;
  $('.js-modal-open').on('click', function(e) {
    e.preventDefault();
    let target = $(this).data("target");
    $('.' + target).fadeIn();
    // モーダル内のスクロール開始位置
    $('.modal-scroll-area').scrollTop(0);
    // 背景固定
    scrollPosition = $(window).scrollTop();
    $('body').addClass('fixed').css({'top':-scrollPosition});
  });
  
  $('.js-modal-close').on('click', function() {
    $('.modal').fadeOut();
    // 背景固定解除
    $('body').removeClass('fixed').css({'top': 0});
    window.scrollTo(0, scrollPosition);
    return false;
  });
});

  
  /* google form
--------------------- */
let $form = $('#js-form')
$form.submit(function(e) { 
  $.ajax({ 
   url: $form.attr('action'), 
   data: $form.serialize(), 
   type: "POST", 
   dataType: "xml", 
   statusCode: { 
      0: function() { 
        //送信に成功したときの処理
        $('#js-success').slideDown()
      }, 
      200: function() { 
        //送信に失敗したときの処理
        $('#js-error').slideDown()
      }
    } 
  });
  return false; 
}); 