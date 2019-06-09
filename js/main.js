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
    console.log(slides);

    function currentSlide(n) {
      slides[slideIndex].classList.remove('slider-active');
      slideButton[slideButtonIndex].classList.remove('btn-slide-active');

      slideIndex = n;
      slideButtonIndex = n;
      slides[n].classList.add('slider-active');
      slideButton[n].classList.add('btn-slide-active');
      console.log(slides);

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



