import { Component } from '@angular/core';
import { Http} from '@angular/http';
import { ModalController, NavController} from 'ionic-angular';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {
  secureLevel:any;
  constructor(public navCtrl: NavController, private http: Http, public modalCtrl: ModalController) {

  }


}
