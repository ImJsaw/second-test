import { Component } from '@angular/core';
import { Http} from '@angular/http';
import { ModalController, NavController} from 'ionic-angular';
import { ScorePage } from '../score/score';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mydata:any;
  testdata = {
    success : true,
    security : 0,
    group : "第x小隊",
    score : 0,
    curEvent : "現在玩什麼OWO"
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

  goScorePage(){
    this.navCtrl.setRoot(ScorePage);
  }

}
