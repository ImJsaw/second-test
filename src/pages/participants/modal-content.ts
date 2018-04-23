import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'modal-content.html',
})
export class ModalContentPage {
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var characters = [
      {
        name: "我不4艾奎華喇",
        team: "老子是召組^_^",
        image: "assets/img/avatar-gollum.jpg",
        items: [
          { title: '校系', note: '台科大電資學士班' },
          { title: '生日', note: '2/30' },
          { title: '感情狀態', note: '一言難盡>//<' },
          { title: '電話', note: '0912487487' },
          { title: 'FB', note: '艾奎華' },
          { title: 'IG', note: 'ai6x8x8' },
        ]
      },
      {
        name: 'Frodo',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Samwise Gamgee',
        quote: 'What we need is a few good taters.',
        image: 'assets/img/avatar-samwise.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
