import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent implements AfterViewInit{

  @ViewChild('map')
  public divMap?: ElementRef;

  @Input() lngLat?: [number, number];

  public zoom: number = 15;
  public map?: Map;

  ngAfterViewInit(): void {
    if(!this.divMap?.nativeElement) throw 'NO hay mapa.';
    if(!this.lngLat) throw 'NO hay Latitud ni Longitud.';

    this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.lngLat,
      zoom: this.zoom,
      interactive: false,
    });

    new Marker()
      .setLngLat(this.lngLat)
      .addTo(this.map);

  }

}
