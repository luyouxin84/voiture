import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { OtherPage } from '../pages/other/other';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import  { myPage } from  '../pages/my/my'
import  { message} from  '../pages/my/message'
import  { Screen } from  '../pages/get_screen_info';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    OtherPage,
    HomePage,
    TabsPage,
    myPage,
    message

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    OtherPage,
    HomePage,
    TabsPage,
    myPage
  ],
  providers: [ Screen ]
})
export class AppModule {}
