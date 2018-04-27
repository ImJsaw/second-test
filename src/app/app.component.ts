import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';

import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { ParticipantsPage } from '../pages/participants/participants';
import { NotificationPage } from '../pages/notification/notification';
import { QRcodePage } from '../pages/q-rcode/q-rcode';
import { TimelinePage } from '../pages/timeline/timeline';
import { SponcerPage } from '../pages/sponcer/sponcer';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild("content") nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public alertCtrl: AlertController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: '首頁', component: HomePage },
      { title: '地圖', component: MapPage },
      { title: '成員', component: ParticipantsPage },
      { title: '通知', component: NotificationPage },
      { title: '條碼', component: QRcodePage },
      { title: '時程', component: TimelinePage },
      { title: '贊助', component: SponcerPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if(window.localStorage.getItem('token') != null){
        this.nav.setRoot(HomePage);
      }
    });

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
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
        handler: () => {
          this.logout()
        }
      },
      ]
    });
    alert.present();
  }

  logout(){
    window.localStorage.removeItem('token');
    this.nav.setRoot(LoginPage);
  }
}
