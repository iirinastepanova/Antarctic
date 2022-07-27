let myMap;

function createMap () {
  myMap = new ymaps.Map('map', {
      center: [59.9385, 30.3227],
      zoom: 15
  }, {
      searchControlProvider: 'yandex#search'
  });

  let myPlacemark = new ymaps.Placemark([59.93852, 30.32275], {},
    {
    iconLayout: 'default#image',
    iconImageHref: './img/pin.png',
    iconImageSize: [18, 22]
  })


  myMap.geoObjects
  .add(myPlacemark)

}

export {createMap};
