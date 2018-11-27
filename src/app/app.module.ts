import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Components

import { TabsPage } from '../pages/tabs/tabs';
import { PendingComponent } from '../pages/pending/pending.component';
import { FinishedComponent } from '../pages/finished/finished.component';
import { AddItemToListComponent } from '../pages/addItemToList/addItemToList.component';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// Services
import { WishesService } from '../services/wishes.service';

//Pipes
import { FilterCompletedTaskPipe } from '../pipes/filter-completed-task/filter-completed-task';
import { ListComponent } from '../components/list.component';



@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendingComponent,
    FinishedComponent,
    AddItemToListComponent,
    FilterCompletedTaskPipe,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendingComponent,
    FinishedComponent,
    AddItemToListComponent,
    ListComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WishesService,
  ]
})
export class AppModule {}
