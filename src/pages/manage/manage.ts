import { Component } from '@angular/core';
import { Http} from '@angular/http';
import { ModalController, NavController} from 'ionic-angular';

@Component({
  selector: 'page-manage',
  templateUrl: 'manage.html'
})
export class ManagePage {
  team = 0;
  score = 0;

  testdata = {
    success : true,
    security : 99,
    score : 0,
    curEvent : "現在玩什麼OWO"
  }

  constructor(public navCtrl: NavController, private http: Http, public modalCtrl: ModalController) {
    this.getdata()
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

  addScore(){
    alert(this.team);
    this.http.post('http://suin.limaois.me:8888/workers/addScore',
    {
      token : window.localStorage.getItem('token'),
      team : this.team,
      score: this.score,
    })
    .subscribe(data=>{

    },error =>{
      alert(error)
    })
    this.team = 0;
    this.score = 0;
  }

  prevEvent(){
    this.http.post('http://suin.limaois.me:8888/admin/setCurEvent/prev',
    {
      token : window.localStorage.getItem('token'),
    })
    .subscribe(data=>{
    },error =>{
      alert(error)
    })
  }

  nextEvent(){
    this.http.post('http://suin.limaois.me:8888/admin/setCurEvent/next',
    {
      token : window.localStorage.getItem('token'),
    })
    .subscribe(data=>{
    },error =>{
      alert(error)
    })
  }

}
