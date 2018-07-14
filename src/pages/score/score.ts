import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})
export class ScorePage {

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['一小', '二小', '三小', '四小', '五小', '六小', '七小','八小'];

  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public fullScoreData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40,22], label: '總積分'}
  ];
  public gameData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40,22], label: '陸大地'},
    {data: [28, 48, 40, 19, 86, 27, 90,45], label: '水大地'}
  ];
  public nightData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40,22], label: '花費時間(min)'}
  ];
  testData = [1, 2, 3, 4, 5, 6, 7,99]


  update(){
    this.http.post('http://suin.limaois.me:8888/',
    {
      token : window.localStorage.getItem('token'),
    })
    .subscribe(data=>{

    },error =>{
      alert(error)
    })
  }

  fakeupdate(){
    this.fullScoreData[0].data = this.testData
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    //this.update()//get data
    this.fakeupdate()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }

}
