import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { ParticipantsPage } from '../pages/participants/participants';
import { ModalTestPage } from '../pages/modal-test/modal-test';
import { ModalContentPage } from '../pages/modal-test/modal-content';
import { NotificationPage } from '../pages/notification/notification';
import { QRcodePage } from '../pages/q-rcode/q-rcode';
import { TimelinePage } from '../pages/timeline/timeline';
import { SponcerPage } from '../pages/sponcer/sponcer';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapPage,
    ParticipantsPage,
    ModalTestPage,
    ModalContentPage,
    NotificationPage,
    QRcodePage,
    TimelinePage,
    SponcerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapPage,
    ParticipantsPage,
    ModalTestPage,
    ModalContentPage,
    NotificationPage,
    QRcodePage,
    TimelinePage,
    SponcerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
