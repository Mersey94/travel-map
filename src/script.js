mapboxgl.accessToken =
  "pk.eyJ1IjoibWVyc2V5OTQiLCJhIjoiY2t0dXJ4c3loMGw0NzJwbW5vcHdieWo4byJ9.qUAjthOSkkef9UpuTV098Q";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: [134, -25],
  zoom: 2,
});

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [151.2093, -33.8688],
      },
      properties: {
        title: "Home",
        description: "🏡",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [138.6007, -34.9285],
      },
      properties: {
        title: "Home",
        description: "🏡",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.8914, -33.8613],
      },
      properties: {
        title: "Home",
        description: "🏡",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [149.13, -35.2809],
      },
      properties: {
        title: "Home",
        description: "🏡",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [138.61, -33.8336],
      },
      properties: {
        title: "Home",
        description: "🏡",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [148.6248, -36.4172],
      },
      properties: {
        title: "Home",
        description: "🚐",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [139.6503, 35.6762],
      },
      properties: {
        title: "Tokyo, Honshu",
        description: "2016 Autumn",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [135.5023, 34.6937],
      },
      properties: {
        title: "Osaka, Honshu",
        description: "2016 Autumn",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [141.3545, 43.0618],
      },
      properties: {
        title: "Sapporo, Hokkaido",
        description: "2018 Spring",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [132.4553, 34.3853],
      },
      properties: {
        title: "Hiroshima, Honshu",
        description: "2018 Spring",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [132.994, 34.3091],
      },
      properties: {
        title: "Ōkunoshima Island, Tadanoumicho",
        description: "2018 Spring",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [135.7681, 35.0116],
      },
      properties: {
        title: "Kyoto, Honshu",
        description: "2018 Spring",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [141.1543, 39.702],
      },
      properties: {
        title: "Morioka, Iwate Prefecture",
        description: "2018 Spring",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [116.4074, 39.9042],
      },
      properties: {
        title: "Beijing, Beijing Province",
        description: "2017 Summer",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [121.4737, 31.2304],
      },
      properties: {
        title: "Shanghai, Shanghai Province",
        description: "2017 Summer",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [110.4792, 29.1171],
      },
      properties: {
        title: "Zhangjiajie, Hunan Province",
        description: "2017 Summer",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [108.9398, 34.3416],
      },
      properties: {
        title: "Xi'an, Shaanxi Province",
        description: "2017 Summer",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [120.1551, 30.2741],
      },
      properties: {
        title: "Hangzhou, Zhejiang Province",
        description: "2017 Summer",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [113.5439, 22.1987],
      },
      properties: {
        title: "Macao, Guangdong Province",
        description: "2019 Summer",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [114.1694, 22.3193],
      },
      properties: {
        title: "Hong Kong, Hong Kong Island",
        description: "2019 Summer",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [126.978, 37.5665],
      },
      properties: {
        title: "Seoul, South Korea",
        description: "2018 Spring",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [128.6014, 35.8714],
      },
      properties: {
        title: "Daegu,Gyeongsang Province",
        description: "2018 Spring",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [129.0756, 35.1796],
      },
      properties: {
        title: "Busan, South Korea",
        description: "2018 Spring",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [125.7625, 39.0392],
      },
      properties: {
        title: "Pyongyang, The Democratic People's Republic of Korea",
        description: "2019 October",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [127.446, 39.1539],
      },
      properties: {
        title: "Wonsan, The Democratic People's Republic of Korea",
        description: "2019 October",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [126.5878, 37.9382],
      },
      properties: {
        title: "Kaesŏng, The Democratic People's Republic of Korea",
        description: "2019 October",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [37.6173, 55.7558],
      },
      properties: {
        title: "Moscow, Russia",
        description: "2018 Winter",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [30.3609, 59.9311],
      },
      properties: {
        title: "Saint Petersburg, Russia",
        description: "2018 Winter",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [104.289, 52.2855],
      },
      properties: {
        title: "Irkutsk, Siberia",
        description: "2018 Winter",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [30.5234, 50.4501],
      },
      properties: {
        title: "Kyiv, Ukraine",
        description: "2018 Winter",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [30.0542, 51.4045],
      },
      properties: {
        title: "Pripyat, Ukraine",
        description: "2018 Winter",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [30.2219, 51.2763],
      },
      properties: {
        title: "Chornobyl, Ukraine",
        description: "2018 Winter",
      },
    },
  ],
};
// add markers to map
for (const { geometry, properties } of geojson.features) {
  // create a HTML element for each feature
  const el = document.createElement("div");
  el.className = "marker";

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(`<h3>${properties.title}</h3><p>${properties.description}</p>`)
    )
    .addTo(map);
}
