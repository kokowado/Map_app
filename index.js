let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 35.689, lng: 139.692 },
    zoom: 8,
  });
}

function initMap(){
  const map=new google.maps.Map(document.getElementById("map")
    zoom:3,
    center: { lat: 35.689, lng: 139.692 },
});
const infoWindow =new google.maps.InforWindow({
  content:"",
  disableAutoPan:true,
});

const label="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const markers=locations.map((position, i) => {
  const label =label[i% labels.lnegth];
  const marker =new google.maps.Marker({
    positon,
    label,
  });

  marker.addListener("click",()=> {
    infoWindow.setContent(label);
    infoWindow.open(map,marker);
  });
  return marker;
});

new MarkerClusterer({markers,map});
}

    

  
