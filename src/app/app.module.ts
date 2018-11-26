import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Components

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PendingComponent } from '../pages/pending/pending.component';
import { FinishedComponent } from '../pages/finished/finished.component';
import { AddItemToListComponent } from '../pages/addItemToList/addItemToList.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// Services
import { WishesService } from '../services/wishes.service';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    PendingComponent,
    FinishedComponent,
    AddItemToListComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    PendingComponent,
    FinishedComponent,
    AddItemToListComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WishesService,
  ]
})
export class AppModule {}
