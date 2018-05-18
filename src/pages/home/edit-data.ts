import { Component } from '@angular/core';
import { Platform, ViewController } from 'ionic-angular';
import { Http} from '@angular/http';

@IonicPage()

@Component({
  templateUrl: 'edit-data.html',
})
export class EditDataPage {
  myData : any;
  charData = {
      name: "姓名",
      group: "第X小隊",
      image: "ttassets/img/avatar-gollum.jpg",
      items: [
        { title: '校系', note: ''},
        { title: '生日', note: '' },
        { title: '感情狀態', note: '' },
      ]
    }


  constructor(public platform: Platform,public viewCtrl: ViewController,public http:Http){
  }

  sentData(){
    this.http.post('http://suin.limaois.me:8888/group/getUsers',
    {
      token : window.localStorage.getItem('token'),
    })
    .subscribe(data=>{
      this.myData = data.json()
      alert("get group user data success")
    },error =>{
      alert(error)
    })
  }

  verifyData(){
    if(this.charData.items[0].note == '' || this.charData.items[1].note == '' || this.charData.items[2].note == ''){
      alert("資料不可為空");
    }
    else{
      this.sentData();
      this.dismiss();
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
