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
    var slideCaptionIndex = 0;
    var slideImgIndex = 0;
    var slideButtonIndex = 0;
    var mainPage = document.querySelector('.main-page');
    var slideButton = mainPage.querySelectorAll('.btn-slide');
    var slidesCaption = mainPage.querySelectorAll('.slider-caption');
    var slidesImg = mainPage.querySelectorAll('.slide-img');
//функция смены слайдов
    function currentSlide(n) {
      //удаляем класс видимости у предыдущего
      slidesImg[slideImgIndex].classList.remove('slide-img-active');
      slidesCaption[slideCaptionIndex].classList.remove('slide-active');
      slideButton[slideButtonIndex].classList.remove('btn-slide-active');
      //запоминаем новый для следующего раза
      slideCaptionIndex = n;
      slideImgIndex = n;
      slideButtonIndex = n;
      //показываем новый
      slidesImg[n].classList.add('slide-img-active');
      slidesCaption[n].classList.add('slide-active');
      slideButton[n].classList.add('btn-slide-active');
//прописываем в разметке цвет фона у body
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

//popup feedback
var overlay = document.querySelector('.overlay');
var btnFeedback = document.querySelector('.btn-feedback');
var popup = document.querySelector('.modal-feedback');
var close = popup.querySelector('.modal-close');
var feedbackName = popup.querySelector('[name=fedback-name]');
var feedbackEmail = popup.querySelector('[name=fedback-email]');
var feedbackText = popup.querySelector('[name=message]');
var form = popup.querySelector('.feedback-form');
//показываем при клике на кнопку в секции
btnFeedback.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('modal-feedback-show');
  overlay.classList.add('overlay-show');
  feedbackName.focus();
});
//скрываем при клике на кнопку  'закрыть' в форме
close.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.remove('modal-feedback-show');
  overlay.classList.remove('overlay-show');
  popup.classList.remove('modal-feedback-error');
});
//проверяем наличие пустых полей
form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
    popup.classList.remove('modal-feedback-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('modal-feedback-error');
  }
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove('modal-feedback-show');
    overlay.classList.remove('overlay-show');
    popup.classList.remove('modal-feedback-error');
  }
});
