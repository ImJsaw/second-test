import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Http} from '@angular/http';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {
    username:null,
    password:null
  }
  @Injectable()
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController,private http: Http) {
    this.menu = menu;
    this.menu.enable(false,"MyMenu")
  }

  login() {
    if (this.user.username == null) {
        alert("輸入帳號");
    } else if (this.user.password == null) {
        alert("輸入密碼");
      } else {
        let userinfo: string = 'ID：' + this.user.username + 'PW：' + this.user.password;
        alert(userinfo);
        this.http.post('http://localhost:9090/app/login?account=',
          {
            account : this.user.username,
            password: this.user.passwd
          },
          {
            headers: { 'Content-Type': 'application/json' }
          })
          this.navCtrl.setRoot(HomePage);
          this.menu.enable(true,"MyMenu")
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
}
