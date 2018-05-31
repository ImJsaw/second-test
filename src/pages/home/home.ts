import { Component } from '@angular/core';
import { Http} from '@angular/http';
import { EditDataPage } from "./edit-data"
import { ModalController, NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mydata:any;
  testdata = {
    success : true,
    name : "name",
    group : "group",
    school: "school",
    birthday : "birthday",
    inlove : "love status",
    phone:"phone",
    socialmedia:{
      fb:"fb",
      ig:"ig"
    }
  }

  constructor(public navCtrl: NavController, private http: Http, public modalCtrl: ModalController) {
    this.getdata()

  }

  doRefresh(refresher){
    console.log("refresh")
    this.getdata()
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  getdata(){
    this.http.post('http://suin.limaois.me:8888/user/get',
    {
      token : window.localStorage.getItem('token'),
    })
    .subscribe(data=>{
      this.mydata = data.json()
      if(this.mydata.success){
        this.testdata = this.mydata
        alert("get data success")
        
      }
      else{
        alert("Token錯誤"+ window.localStorage.getItem('token'))
      }
    },error =>{
      alert(error)
    })
  }

  openEditPage(){
    console.log("openEditPage")
    //open indivisual page
    let modal = this.modalCtrl.create(EditDataPage);
    modal.present();
  }
}
