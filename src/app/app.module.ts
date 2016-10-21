import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { NotePage } from '../pages/note/note';
import { OtherPage } from '../pages/other/other';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import  { myPage } from  '../pages/my/my'
import  { message} from  '../pages/my/message'
import  { Screen } from  '../pages/get_screen_info';
import { detaildate } from '../pages/note/detaildate';

@NgModule({
  declarations: [
    MyApp,
    NotePage,
    OtherPage,
    HomePage,
    TabsPage,
    myPage,
    message,
    detaildate
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotePage,
    OtherPage,
    HomePage,
    TabsPage,
    myPage
  ],
  providers: [ Screen ]
})
export class AppModule {}
