let map: google.maps.Map;
async function initMap(): Promise<void> {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map") as HTMLElement, {
    center: { lat: 35.689, lng: 139.692 },
    zoom: 8,
  });
}

function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 3,
      center: { lat: -28.024, lng: 140.887 },
    }
  );

  const infoWindow = new google.maps.InfoWindow({
    content: "",
    disableAutoPan: true,
  });

  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Add some markers to the map.
  const markers = locations.map((position, i) => {
    const label = labels[i % labels.length];
    const marker = new google.maps.Marker({
      position,
      label,
    });

    // markers can only be keyboard focusable when they have click listeners
    // open info window when marker is clicked
    marker.addListener("click", () => {
      infoWindow.setContent(label);
      infoWindow.open(map, marker);
    });

    return marker;
  });

  // Add a marker clusterer to manage the markers.
  new MarkerClusterer({ markers, map });
}

const locations = [
　　{ lat: 35.6895, lng: 139.6917 },
  　{ lat: 35.6586, lng: 139.7454 },
    { lat: 35.6993, lng: 139.7710 },
    { lat: 35.6733, lng: 139.7100 },
    { lat: 35.6852, lng: 139.7528 },
    { lat: 35.6957, lng: 139.7758 },
    { lat: 35.6467, lng: 139.7090 },
    { lat: 35.6674, lng: 139.7394 },
    { lat: 35.6346, lng: 139.7390 },
    { lat: 35.6894, lng: 139.7006 },
    { lat: 35.7023, lng: 139.7745 },
    { lat: 35.7101, lng: 139.8107 },
    { lat: 35.6544, lng: 139.7591 },
    { lat: 35.6580, lng: 139.7516 },
    { lat: 35.6482, lng: 139.7100 },
    { lat: 35.6695, lng: 139.7617 },
    { lat: 35.6764, lng: 139.6993 },
    { lat: 35.6714, lng: 139.7630 },
    { lat: 35.7044, lng: 139.7602 },
    { lat: 35.7120, lng: 139.7788 },
    { lat: 35.6909, lng: 139.7003 },
    { lat: 35.6654, lng: 139.7389 }
];

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
