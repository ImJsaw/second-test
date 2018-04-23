import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  userimage = "assets/img/avatar-gollum.jpg"
  name = "我不4艾奎華喇";
  group = "老子是召組^_^"
  school = "台科大電資學士班"
  birthday = "2/30"
  inlove = "一言難盡>//<"
  phonenumber = "0912487487"
  facebook = "艾奎華"
  instagram = "ai6x8x8"

  constructor(public navCtrl: NavController) {



  }

}
