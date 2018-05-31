import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController,App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { IntroPage } from '../pages/intro/intro';
import { ParticipantsPage } from '../pages/participants/participants';
import { NotificationPage } from '../pages/notification/notification';
import { EventPage } from '../pages/event/event';
import { TimelinePage } from '../pages/timeline/timeline';
import { SponcerPage } from '../pages/sponcer/sponcer';
import { MasterPage } from '../pages/master/master';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild("content") nav: Nav;

  rootPage: any = LoginPage;
  alertShown = false;
  lastBack:any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public app:App,
              public splashScreen: SplashScreen,public alertCtrl: AlertController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: '首頁', component: HomePage },
      { title: '地圖', component: MapPage },
      { title: '成員', component: ParticipantsPage },
      { title: '通知', component: NotificationPage },
      { title: '活動', component: EventPage },
      { title: '時程', component: TimelinePage },
      { title: '贊助', component: SponcerPage },
      { title: '系所介紹', component: IntroPage },
      { title: '管理介面', component: MasterPage },

    ];

    platform.registerBackButtonAction(() => {
	       const overlayView = this.app._appRoot._overlayPortal._views[0];
	       if(overlayView && overlayView.dismiss) {
		         overlayView.dismiss();
	       } else {
		          let nav = this.app.getActiveNav();
		          if(nav.canGoBack()){
			             nav.pop();
		          } else if(this.lastBack + 500 < Date.now()) {
			             this.confirmExitApp();
		          }
	       }
	       this.lastBack = Date.now();
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if(window.localStorage.getItem('token') != null){
        this.nav.setRoot(HomePage);
      }
    });
  }

  confirmExitApp(){
    let alert = this.alertCtrl.create({
      title: '退出APP',
      message: '確認退出?',
      buttons: [{
          text: '取消',
          role: 'cancel',
          handler: () => {this.alertShown=false;}
        },
        {
          text: '是',
          handler: () => {this.platform.exitApp();}
        }]
    });
     alert.present().then(()=>{
      this.alertShown=true;
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: '登出',
      message: '確認登出?',
      buttons: [{
        text: '取消',
        role: "cancel"
      },
      {
        text: '確認',
        handler: () => {this.logout()}
      }]
    });
    alert.present();
  }

  logout(){
    window.localStorage.removeItem('token');
    this.nav.setRoot(LoginPage);
  }
}
