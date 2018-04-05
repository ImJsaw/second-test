
import { Component } from '@angular/core';
import { ModalContentPage} from './modal-content'

import { ModalController, Platform, NavParams, ViewController, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modal-test',
  templateUrl: 'modal-test.html'
})
export class ModalTestPage {
  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public navParams: NavParams) {
  }

    openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }
}
