if (!mapToken) {
  console.error("Maptoken data missing");
  throw new Error("Invalid map data");
}

if (!coordinates) {
  console.log("coordinates are missing");
}

console.log(coordinates);
console.log(mapToken);

const [lng, lat] = coordinates;

mapboxgl.accessToken = mapToken;


const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [lng, lat],
  zoom: 9
});

new mapboxgl.Marker()
  .setLngLat([lng, lat])
  .addTo(map);
