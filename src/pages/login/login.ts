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

  mydata:any;
  user = {
    username:null,
    password:null
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController,private http: Http) {
    console.log('construct LoginPage');
    this.menu = menu;
    this.menu.enable(false,"MyMenu")
  }

  login() {
    if (this.user.username == null) {
        alert("輸入帳號");
    } else if (this.user.password == null) {
        alert("輸入密碼");
      } else if(this.user.username == "jsaw" && this.user.password == "0000"){//test mode
          window.localStorage.setItem('token',"FUCKYOUCSHARP")
          this.navCtrl.setRoot(HomePage);
          }
          else{
            this.http.post('http://175.182.61.162:8888/login',
            {
              username : this.user.username,
              password: this.user.password
            })
            .subscribe(data=>{
              this.mydata = data.json()
              if(this.mydata.success){//login success
                alert("login success")
                window.localStorage.setItem('token',this.mydata.token)
                this.navCtrl.setRoot(HomePage);
              }
              else{
                alert("帳號或密碼錯誤")
              }
            },error =>{
              alert(error)
            })
        }

    }


  ionViewWillLeave(){
    this.menu.enable(true,"MyMenu")
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
}
