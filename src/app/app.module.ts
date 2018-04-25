import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule,} from 'ionic-angular';

import { LoginPage } from '../pages/login/login';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { ParticipantsPage } from '../pages/participants/participants';
import { ModalContentPage } from '../pages/participants/modal-content';
import { NotificationPage } from '../pages/notification/notification';
import { QRcodePage } from '../pages/q-rcode/q-rcode';
import { TimelinePage } from '../pages/timeline/timeline';
import { SponcerPage } from '../pages/sponcer/sponcer';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginServiceProvider } from '../providers/login-service/login-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapPage,
    ParticipantsPage,
    ModalContentPage,
    NotificationPage,
    QRcodePage,
    TimelinePage,
    SponcerPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapPage,
    ParticipantsPage,
    ModalContentPage,
    NotificationPage,
    QRcodePage,
    TimelinePage,
    SponcerPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginServiceProvider
  ]
})
export class AppModule {}
