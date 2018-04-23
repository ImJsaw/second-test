import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    this.menu = menu;
    this.menu.enable(false,"MyMenu")
  }

  logIn(username: HTMLInputElement, password: HTMLInputElement) {
    if (username.value.length == 0) {
        alert("輸入帳號");
    } else if (password.value.length == 0) {
        alert("輸入密碼");
      } else {
        let userinfo: string = 'ID：' + username.value + 'PW：' + password.value;
        alert(userinfo);
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
