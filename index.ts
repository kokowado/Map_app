let map: google.maps.Map;
async function initMap(): Promise<void> {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map") as HTMLElement, {
    center: { lat: 35.689, lng: 139.692 },
    zoom: 8,
  });
}

initMap();
