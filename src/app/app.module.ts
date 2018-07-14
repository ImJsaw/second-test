import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule,} from 'ionic-angular';
import { ChartsModule } from 'ng2-charts';
import { LoginPage } from '../pages/login/login';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { IntroPage } from '../pages/intro/intro';
import { NotificationPage } from '../pages/notification/notification';
import { ManagePage } from '../pages/manage/manage';
import { ScorePage } from '../pages/score/score';
import { TimelinePage } from '../pages/timeline/timeline';
import { SponcerPage } from '../pages/sponcer/sponcer';
import { Push } from '@ionic-native/push';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginServiceProvider } from '../providers/login-service/login-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapPage,
    NotificationPage,
    IntroPage,
    ScorePage,
    TimelinePage,
    SponcerPage,
    LoginPage,
    ManagePage,
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
    IntroPage,
    NotificationPage,
    ScorePage,
    TimelinePage,
    SponcerPage,
    LoginPage,
    ManagePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginServiceProvider,
    Push
  ]
})
export class AppModule {}
