/* 
    Instrução para poder ser arg pro mapa 
*/
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
  addMarker(mappable: Mappable): void {
    const { location } = mappable;
    new google.maps.Marker({
      map: this.googleMap,
      position: location,
      title: "User Position",
    });
  }
}
