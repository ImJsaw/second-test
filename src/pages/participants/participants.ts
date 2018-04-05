import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ParticipantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-participants',
  templateUrl: 'participants.html',
})
export class ParticipantsPage {

  team_one:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.team_one = [
      '隊輔1',
      '隊輔2',
      '隊員1',
      '隊員2',
      '隊員3',
      '隊員4',
      '隊員5',
      '隊員6',
      '隊員7',
      '隊員8',
      '隊員9',
      '隊員10'
    ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParticipantsPage');
  }

}
