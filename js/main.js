	// Яндекс карта
	ymaps.ready(init);
	function init() {
		var map = new ymaps.Map('map', {
			center: [59.9386, 30.3231],
			zoom: 17//,
			//controls: ['zoomControl'],
			//behaviors: ['default', 'scrollZoom']
		},  {
      searchControlProvider: 'yandex#search'
  });
		var placemark = new ymaps.Placemark([59.9386, 30.3231], {
				hintContent: 'GllasyShop'
			},
			{
				iconLayout: 'default#image', //название
				iconImageHref: 'img/service-img/pin.png', //источник
				iconImageSize: [218, 142], //размер
				iconImageOffset: [-40, -140] //координаты смещения
			});
		map.geoObjects.add(placemark);
    };

    //slider
    var slideIndex = 0;
    var slideButtonIndex = 0;
    var mainPage = document.querySelector('.main-page');
    var slideButton = document.querySelectorAll('.btn-slide');
    var slides = document.querySelectorAll('.slider-item');

    function currentSlide(n) {
      slides[slideIndex].classList.remove('slider-active');
      slideButton[slideButtonIndex].classList.remove('btn-slide-active');

      slideIndex = n;
      slideButtonIndex = n;
      slides[n].classList.add('slider-active');
      slideButton[n].classList.add('btn-slide-active');

      switch(n) {
        case 0:
            mainPage.style.backgroundColor = '#849d8f';
            break;
        case 1:
            mainPage.style.backgroundColor = '#8996a6';
            break;
        case 2:
            mainPage.style.backgroundColor = '#9d8b84';
            break;
      }
    }

//popup
var overlay = document.querySelector('.overlay');
var btnFeedback = document.querySelector('.btn-feedback');
var popup = document.querySelector('.modal-feedback');
var close = popup.querySelector('.modal-close');
var feedbackName = popup.querySelector('[name=fedback-name]');
var feedbackEmail = popup.querySelector('[name=fedback-email]');
var feedbackText = popup.querySelector('[name=message]');
var form = popup.querySelector('.feedback-form');

btnFeedback.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('modal-feedback-show');
  overlay.classList.add('overlay-show');
  feedbackName.focus();
});

close.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.remove('modal-feedback-show');
  overlay.classList.remove('overlay-show');
});

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
    popup.classList.add('modal-feedback-error');
  }
});
