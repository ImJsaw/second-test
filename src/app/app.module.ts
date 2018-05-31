import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule,} from 'ionic-angular';
import { ChartsModule } from 'ng2-charts';
import { LoginPage } from '../pages/login/login';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EditDataPage } from '../pages/home/edit-data';
import { MapPage } from '../pages/map/map';
import { IntroPage } from '../pages/intro/intro';
import { ParticipantsPage } from '../pages/participants/participants';
import { ModalContentPage } from '../pages/participants/modal-content';
import { NotificationPage } from '../pages/notification/notification';
import { MasterPage } from '../pages/master/master';
import { EventPage } from '../pages/event/event';
import { TimelinePage } from '../pages/timeline/timeline';
import { SponcerPage } from '../pages/sponcer/sponcer';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginServiceProvider } from '../providers/login-service/login-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EditDataPage,
    MapPage,
    ParticipantsPage,
    ModalContentPage,
    NotificationPage,
    IntroPage,
    EventPage,
    TimelinePage,
    SponcerPage,
    LoginPage,
    MasterPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapPage,
    ParticipantsPage,
    ModalContentPage,
    EditDataPage,
    IntroPage,
    NotificationPage,
    EventPage,
    TimelinePage,
    SponcerPage,
    LoginPage,
    MasterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginServiceProvider
  ]
})
export class AppModule {}
