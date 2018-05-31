import { Component } from '@angular/core';
import { Http} from '@angular/http';
import { ModalController, NavController} from 'ionic-angular';

@Component({
  selector: 'page-master',
  templateUrl: 'master.html'
})
export class MasterPage {
  secureLevel:any;
  constructor(public navCtrl: NavController, private http: Http, public modalCtrl: ModalController) {
    this.getdata()
    //this.secureLevel = window.localStorage.getItem('security')
    this.secureLevel = parseInt('999',10)-1


  }

  getdata(){
    this.http.post('http://suin.limaois.me:8888/user/get',
    {
      token : window.localStorage.getItem('token'),
    })
    .subscribe(data=>{

    },error =>{
      alert(error)
    })
  }

}
