import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, MarkerOptions, Marker} from "@ionic-native/google-maps";


@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})

export class MapPage {
  @ViewChild('mapContainer') mapContainer: ElementRef;

  center:any={
      'lat':25.042375,
      'lng':121.525383,
      'name':'北商大'
    };
  map:any;

  constructor(public googleMaps: GoogleMaps, public plt: Platform, public nav: NavController,public navParams: NavParams) {
  }

  ionViewWillEnter() {
      this.displayGoogleMap();
      this.addMarkersToMap();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

  displayGoogleMap() {
    let latLng = new google.maps.LatLng(this.center.lat, this.center.lng);

    let mapOptions = {
      center: latLng,
      disableDefaultUI: true,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.map.nativeElement, mapOptions);
  }

  addMarkersToMap() {
    var position = new google.maps.LatLng(this.center.lat, this.center.lng);
    var myMarker = new google.maps.Marker({position:position, title:this.center.name});
    myMarker.setMap(this.map);
  }

}
