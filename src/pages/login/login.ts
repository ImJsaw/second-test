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
        this.http.post('http://140.118.74.34:8888/login',
          {
            username : this.user.username,
            password: this.user.password
          })
          .subscribe(data=>{
            this.mydata = data.json()
            if(this.mydata.success){
              alert("login success")
              window.localStorage.setItem('token',this.mydata.token)
              window.localStorage.setItem('username',this.user.username)
              window.localStorage.setItem('password',this.user.password)
              this.navCtrl.setRoot(HomePage);
              this.menu.enable(true,"MyMenu")
            }
            else{
              alert("帳號或密碼錯誤")
            }
          },error =>{
            alert(error)
          })
      }
    }

    test() {
      let userinfo: string = 'ID：' + this.user.username + 'PW：' + this.user.password;
      alert(userinfo);
      this.http.post('http://140.118.74.34:8888/test',
        {
          username : "testuser",
          password: "00000000",
          responce:"200",
          token:"token123456"
        })
        .subscribe(data=>{
          this.mydata = data.json()
          window.localStorage.setItem('token',this.mydata.token)
          alert(this.mydata.token)
        },error =>{
          alert("ERR"+ error)
          })
      }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
}
