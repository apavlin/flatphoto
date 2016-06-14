//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../node_modules/photoswipe/dist/photoswipe.min.js
//= ../../node_modules/photoswipe/dist/photoswipe-ui-default.min.js
//= ../../node_modules/scrollreveal/dist/scrollreveal.min.js
//= ../../node_modules/isotope-layout/dist/isotope.pkgd.min.js
//= ../../node_modules/imagesLoaded/imagesloaded.pkgd.min.js

$(document).ready(function() {

$('.gallery__box:has(.gallery__img[src="img/flats/thumbnails/flat4-8.jpg"],.gallery__img[src="img/flats/thumbnails/flat10-13.jpg"])').addClass('panorama100');
$('.gallery__box:has(.gallery__img[src="img/flats/thumbnails/flat6-8.jpg"], .gallery__img[src="img/flats/thumbnails/flat1-2.jpg"], .gallery__img[src="img/flats/thumbnails/flat3-3.jpg"], .gallery__img[src="img/flats/thumbnails/flat8-1.jpg"])').addClass('panorama50');
$('.gallery__link[href="img/flats/flat6-6.jpg"], .gallery__link[href="img/flats/flat8-2.jpg"]').attr("data-size", "1920x2570");
$('.gallery__link[href="img/flats/flat7-7.jpg"], .gallery__link[href="img/flats/flat7-8.jpg"], .gallery__link[href="img/flats/flat7-9.jpg"]' ).attr("data-size", "1920x2880");
$('.gallery__link[href="img/flats/flat4-8.jpg"]').attr("data-size", "3000x1079");
$('.gallery__link[href="img/flats/flat10-13.jpg"]').attr("data-size", "3000x867");





//Переход вверх (без добавления в адрес id)
 $(".contactme__link").click(function () {
          var elementClick = $(this).attr("href");
          var destination = $(elementClick).offset().top;
          $('html,body').scrollTop(destination);
          return false;


    });

// Привлечение внимания при переходе в пункт "Связаться со мной"
    $('.contactme__link').on('click', function() {

        $('.contacts__link_vk').css({
              'animation-name': 'downUp',
              'animation-duration': '0.3s',
              'animation-delay': '0.5s'});

        $('.contacts__link_fb').css({
              'animation-name': 'downUp',
              'animation-duration': '0.3s',
              'animation-delay': '0.8s'});

        $('.contacts__link_tel').css({
              'animation-name': 'downUp',
              'animation-duration': '0.3s',
              'animation-delay': '1.1s'});

        $('.contacts__link_email').css({
              'animation-name': 'downUp',
              'animation-duration': '0.3s',
              'animation-delay': '1.4s'});

        $('.contacts__link_skype').css({
              'animation-name': 'downUp',
              'animation-duration': '0.3s',
              'animation-delay': '1.7s'});
    });

// На touch-устройствах при нажатии срабатывает hover
$(document).on("mouseup touchend", function(e) {
  $(document).off("mousemove touchmove");
});

// Плавное появление фотографий
window.sr = ScrollReveal({ duration: 1500 });
sr.reveal('.gallery__img');

// Плотное расстановка блоков
var $grid = $('.gallery').imagesLoaded( function() {
  // init Isotope after all images have loaded
  $grid.isotope({
    itemSelector: '.gallery__box',
  columnWidth: '.grid-sizer',
  // percentPosition: true
  });
});

//Переключение цвета
$('.colorSwither-black').on('click', function() {
    $('body').css({
        'background':'rgb(30,30,30)',
        'color': 'white'
        });
    $('.st0').css('stroke', 'white');
    $('#logo').attr('src', 'img/logo-black.png');
});
$('.colorSwither-white').on('click', function() {
    $('body').css({
        'background':'white',
        'color': 'black'
        });
    $('.st0').css('stroke', 'black');
     $('#logo').attr('src', 'img/logo-white.png');
});

//Переключение языков
var body = document.getElementsByTagName('body')[0];

    var switcherRU = document.getElementById('switcher-ru');
    var switcherEN = document.getElementById('switcher-en');
    var switcherES = document.getElementById('switcher-es');

    // Заранее считаем срок хранения кук
    var expires = new Date();
    expires.setDate(expires.getDate() + 366);
    expires.toUTCString();

    //  заголовки
    var titleRU = document.getElementById('title-ru');
    var titleEN = document.getElementById('title-en');
    var titleES = document.getElementById('title-es');
    var title = {
      ru: titleRU.getAttribute('content'),
      es: titleES.getAttribute('content'),
      en: titleEN.getAttribute('content')
    }

    var firstloadlang = body.className
      // Меняем класс для BODY
      if (getCookie("lang") == undefined) {
      body.className = "es" } else { body.className = getCookie("lang")};

    // body.className = getCookie("lang");

    var switchLang = function() {
      var lang = this.id
      lang = lang.replace('switcher-', '');

      // Меняем класс для BODY
      body.className = lang;

      // Записываем куки
      // document.cookie = [
      //   'lang=' + lang
      //   ,'; expires=' + expires // используем expires, max-age не поддерживается в ИЕ
      //   ,'; path=/'
      //   ,'; domain=' + document.location.host
      // ].join('');
      document.title = title[lang];

      setCookie("lang", lang);

    }

    switcherRU.onclick = switchLang;
    switcherEN.onclick = switchLang;
    switcherES.onclick = switchLang;


    function setCookie (name, value, expires, path, domain, secure) {
      document.cookie = name + "=" + escape(value) +
         ((expires) ? "; expires=" + expires : "") +
         ((path) ? "; path=" + path : "") +
         ((domain) ? "; domain=" + domain : "") +
         ((secure) ? "; secure" : "");
    };

    function getCookie(name) {
          var cookie = " " + document.cookie;
          var search = " " + name + "=";
          var setStr = null;
          var offset = 0;
          var end = 0;
          if (cookie.length > 0) {
             offset = cookie.indexOf(search);
             if (offset != -1) {
                offset += search.length;
                end = cookie.indexOf(";", offset)
                if (end == -1) {
                   end = cookie.length;
                }
                setStr = unescape(cookie.substring(offset, end));
             }
          }
          return(setStr);
       };
});

