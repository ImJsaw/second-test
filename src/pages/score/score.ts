import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component,ViewChild } from '@angular/core'
import { BaseChartDirective }   from 'ng2-charts/ng2-charts';

@IonicPage()
@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})
export class ScorePage {
  @ViewChild(BaseChartDirective) mChart:BaseChartDirective;
  mydata:any;
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['一小', '二小', '三小', '四小', '五小', '六小', '七小','八小'];

  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public fullScoreData:any[] = [
    {data: [], label: '總積分'}
  ];

  testData = [0, 2, 3, 4, 5, 6, 7,99]


  update(){
    this.http.post('http://suin.limaois.me:8888/event/getScores',
    {
      token : window.localStorage.getItem('token'),
    })
    .subscribe(data=>{
      this.mydata = data.json()
      if(this.mydata.success){
        this.fullScoreData[0].data = [this.mydata[1], this.mydata[2], this.mydata[3], this.mydata[4], this.mydata[5], this.mydata[6], this.mydata[7],this.mydata[8]]
        //alert(this.testData)
        //this.fullScoreData[0].data = this.testData
        //alert("fu"+this.fullScoreData[0].data[0]+"."+this.fullScoreData[0].data[1]+"."+this.fullScoreData[0].data[2]+"."+this.fullScoreData[0].data[3])
        this.mChart.ngOnChanges({})
      }
      else{
        alert("資料錯誤")
      }
    },error =>{
      alert(error)
    })
  }

  demiupdate(){
    this.fullScoreData[0].data = this.testData
    alert("fu"+this.fullScoreData[0].data[0]+"."+this.fullScoreData[0].data[1]+"."+this.fullScoreData[0].data[2]+"."+this.fullScoreData[0].data[3])
    this.mChart.ngOnChanges({})
    alert("update")
  }


  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {

  }

  ionViewWillEnter(){
    this.update()//get data
  }

}
