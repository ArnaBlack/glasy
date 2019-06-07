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
				iconImageHref: '../img/service-img/pin.png', //источник
				iconImageSize: [218, 142], //размер
				iconImageOffset: [-40, -140] //координаты смещения
			});
		map.geoObjects.add(placemark);
    };
