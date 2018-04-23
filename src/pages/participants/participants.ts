
import { Component } from '@angular/core';
import { ModalContentPage} from './modal-content'

import { ModalController, Platform, NavParams, ViewController, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modal-test',
  templateUrl: 'participants.html'
})
export class ParticipantsPage {

  team;

  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public navParams: NavParams) {
      this.team = [
        {
          num:"第一小隊",
          people:[
            {name:"隊輔1"},
            {name:"隊輔2"},
            {name:"隊員1"},
            {name:"test1"},
            {name:"test2"},
            {name:"test3"}
          ]
        },
        {
          num:"第二小隊",
          people:[
            {name:"隊輔2-1"},
            {name:"隊輔2-2"},
            {name:"隊員2-1"},
            {name:"test1"},
            {name:"test2"},
            {name:"test3"}
          ]
        },
      ]
  }

  openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }


}
