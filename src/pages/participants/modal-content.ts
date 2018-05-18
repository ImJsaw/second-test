import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';
import { Http} from '@angular/http';

@IonicPage()
@Component({
  templateUrl: 'modal-content.html',
})
export class ModalContentPage {
  id:string;
  dataList : any;
  charData = {
      name: "tt我不4艾奎華喇",
      group: "t最近很衰小 被車撞Q_Q",
      image: "ttassets/img/avatar-gollum.jpg",
      items: [
        { title: 't校系', note: 't台科大電資學士班' },
        { title: 't生日', note: 't2/30' },
        { title: 't感情狀態', note: '一言難盡>//<' },
        { title: '電話', note: '0912487487' },
        { title: 'FB', note: '艾奎華' },
        { title: 'IG', note: 'ai6x8x8' },
      ]
    }

  constructor(public platform: Platform,public params: NavParams,public viewCtrl: ViewController,public http:Http){
    this.id = this.params.get('c');
    console.log(this.id)
    //getdata
    this.getdata()

  }

  getdata(){
    this.http.post('http://suin.limaois.me:8888/group/getUsers',
    {
      token : window.localStorage.getItem('token'),
      id : this.id
    })
    .subscribe(data=>{
      this.dataList = data.json()
      if(this.dataList.success){
        this.charData = this.dataList
      }
      else {
        alert(this.dataList.messsage)
      }
    },error =>{
      alert(error)
    })
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
