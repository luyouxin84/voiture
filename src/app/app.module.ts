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
import {done_deal} from  '../pages/done_deal/done_deal';
import {car_info} from "../pages/car_info/car_info";
import {person_info} from "../pages/person_info/person_info";
import { leave } from '../pages/leave/leave';
import { shuoshuo } from '../pages/shuoshuo/shuoshuo';
import { write_shuoshuo} from '../pages/write_shuoshuo/write_shuoshuo';
import { write_leave } from '../pages/write_leave/write_leave';
import { order_detail } from '../pages/order_detail/order_detail';
import {relation_account} from "../pages/relation_account/relation_account";
import {demand_cash} from "../pages/demand_cash/demand_cash";
import {note_detail} from "../pages/note_detail/note_detail";
import {write_note} from "../pages/write_note/write_note";
import {add_baoche} from "../pages/add_baoche/add_baoche";
import {pick_address_baoche} from "../pages/add_baoche/pick_address_baoche";
import {cash_flow} from "../pages/cash_flow/cash_flow";
import {create_account} from "../pages/create_account/create_account";
import {http_basic_lib} from "../pages/http_basic_lib";


@NgModule({
  declarations: [
    MyApp,
    NotePage,
    OtherPage,
    HomePage,
    TabsPage,
    myPage,
    message,
    done_deal,
    car_info,
    person_info,
    leave,
    shuoshuo,
    write_shuoshuo,
    write_leave,
    order_detail,
    relation_account,
    demand_cash,
    note_detail,
    write_note,
    add_baoche,
    pick_address_baoche,
    cash_flow,
    create_account,
  ],
  imports: [
    IonicModule.forRoot(MyApp,{
      mode:'ios',
      backButtonText:'返回上页',
      pageTransition:'ios',
      tabsPlacement: 'bottom',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotePage,
    OtherPage,
    HomePage,
    TabsPage,
    myPage,
    done_deal,
    car_info,
    person_info,
    leave,
    shuoshuo,
    write_shuoshuo,
    write_leave,
    order_detail,
    relation_account,
    demand_cash,
    note_detail,
    write_note,
    add_baoche,
    cash_flow,
    create_account
  ],
  providers: [ Screen ,http_basic_lib]
})
export class AppModule {}
