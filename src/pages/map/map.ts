import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, MarkerOptions, Marker} from "@ionic-native/google-maps";

declare var google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})

export class MapPage {
  @ViewChild('mapContainer') mapContainer: ElementRef;

  map:any;
  curPosition={
    'lat':24.941556,
    'lng':121.715761
  }
  markerLocations=[{
      'id':'001',
      'lat':25.013620,
      'lng':121.540634,
      'name':'台科大'
      },{
      'id':'002',
      'lat':24.941556,
      'lng':121.715761,
      'name':'合歡山莊'
      }];

  constructor(public googleMaps: GoogleMaps, public plt: Platform, public nav: NavController,
    public navParams: NavParams,private geolocation: Geolocation) {
      this.onLocateUser();
  }

  ionViewWillEnter() {
      this.displayGoogleMap();
      this.addMarkersToMap();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

  displayGoogleMap() {
    let latLng = new google.maps.LatLng(this.curPosition.lat, this.curPosition.lng);
    let mapOptions = {
      center: latLng,
      disableDefaultUI: true,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
  }

  addMarkersToMap() {
    for(var marker of this.markerLocations){
      var position = new google.maps.LatLng(marker.lat, marker.lng);
      var myMarker = new google.maps.Marker({id:marker.id, position:position, title:marker.name});
      myMarker.setMap(this.map);
      this.addInfoWindowToMarker(myMarker);
    }
  }

  addInfoWindowToMarker(marker) {
    var infoWindowContent = marker.title;
    var infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });
    infoWindow.open(this.map, marker);
  }

  onLocateUser(){
    this.geolocation.getCurrentPosition().then((resp) => {
            //get cur position
          //  alert(resp.coords.latitude);
            //alert(resp.coords.longitude);
            this.curPosition.lat = resp.coords.latitude;
            this.curPosition.lng = resp.coords.longitude;
            //取得座標後再開地圖
        }).catch((error) => {
            //取得座標失敗
            alert('error');
        });
  }
}
