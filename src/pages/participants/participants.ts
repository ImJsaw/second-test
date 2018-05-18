import { Http} from '@angular/http';
import { Component } from '@angular/core';
import { ModalContentPage} from './modal-content'

import { ModalController, Platform, NavParams, ViewController, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modal-test',
  templateUrl: 'participants.html'
})
export class ParticipantsPage {

  group = "team";
  dataList:any;
  tempList ={
    leaders:[
      {name:"隊輔1號",ID:"隊輔1號aID"},
      {name:"tt隊輔3號",ID:"隊輔3號aID"},
      {name:"隊輔2號",ID:"隊輔2號aID"}
    ],
    supervisors:{
      coordinators:[
        {name:"ttt召組1號",ID:"召組1號aID"},
        {name:"召組3號",ID:"召組3號aID"},
        {name:"召組2號",ID:"召組2號aID"}
      ],
      publicRelation:[
        {name:"tt公關1號",ID:"tt公關1號aID"},
        {name:"公關3號",ID:"公關3號aID"},
        {name:"公關2號",ID:"公關2號aID"}
      ],
      art:[
        {name:"tt美宣1號",ID:"tt美宣1號aID"},
        {name:"美宣3號",ID:"美宣3號aID"},
        {name:"美宣2號",ID:"美宣2號aID"}
      ],
      event:[
        {name:"活動1號",ID:"活動1號aID"},
        {name:"活動3號",ID:"活動3號aID"},
        {name:"活動2號",ID:"活動2號aID"}
      ],
      mobile:[
        {name:"機動1號",ID:"機動1號aID"},
        {name:"機動3號",ID:"機動3號aID"},
        {name:"機動2號",ID:"機動2號aID"}
      ]
    },
    team:{
      one:[
        {name:"1組1號",ID:"1組1號aID"},
        {name:"1組3號",ID:"1組3號aID"},
        {name:"1組2號",ID:"1組2號aID"}
      ],
      two:[
        {name:"2關1號",ID:"2關1號aID"},
        {name:"2關3號",ID:"2關3號aID"},
        {name:"2關2號",ID:"2關2號aID"}
      ],
      three:[
        {name:"tt3宣1號",ID:"3宣1號aID"},
        {name:"3宣3號",ID:"3宣3號aID"},
        {name:"3宣2號",ID:"3宣2號aID"}
      ],
    },


  }

  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public navParams: NavParams,public http:Http) {
    //getdata
    this.getdata()
  }

  openModal(c) {
    //open indivisual page
    let modal = this.modalCtrl.create(ModalContentPage, {c:c});
    modal.present();
  }

  getdata(){
    this.http.post('http://suin.limaois.me:8888/group/get',
    {
      token : window.localStorage.getItem('token'),
    })
    .subscribe(data=>{
      this.dataList = data.json()
      this.tempList = this.dataList
      alert("get group data success")
    },error =>{
      alert(error)
    })
  }

}
