/*
    Interface que Permite o display no mapa
*/
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  name: string;
  markerContent(): string;
}
