import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { ParticipantsPage } from '../pages/participants/participants';
import { ModalTestPage } from '../pages/modal-test/modal-test';
import { ModalContentPage } from '../pages/modal-test/modal-content';
import { NotificationPage } from '../pages/notification/notification';
import { QRcodePage } from '../pages/q-rcode/q-rcode';
import { TimelinePage } from '../pages/timeline/timeline';
import { SponcerPage } from '../pages/sponcer/sponcer';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: '首頁', component: HomePage },
      { title: '地圖', component: MapPage },
      { title: '成員', component: ParticipantsPage },
      { title: '成員~~', component: ModalTestPage },
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
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
