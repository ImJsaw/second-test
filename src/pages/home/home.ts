import { Component } from '@angular/core';
import { Http} from '@angular/http';
import { NavController} from 'ionic-angular';

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
    relationship : "love status",
    phone:"phone",
    socialmedia:{
      fb:"fb",
      ig:"ig"
    }
  }

  constructor(public navCtrl: NavController, private http: Http) {
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
    this.http.post('http://175.182.61.162:8888/user/get',
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

}
