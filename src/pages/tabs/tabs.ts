import { Component ,OnInit} from '@angular/core';

import { HomePage } from '../home/home';
import { NotePage } from '../note/note';
import { OtherPage } from '../other/other';
import { myPage } from '../my/my';
import { NavController } from "ionic-angular";
import { relation_account } from '../relation_account/relation_account';
// import { Sim } from 'ionic-native';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage implements OnInit{
  tabshow:boolean ;
  loginshow:boolean;
  ngOnInit(): void {
    //入没有登录信息，必须登录
    if ( !localStorage.getItem('uid') ){
      this.tabshow = false;
      this.loginshow = true;
    }else {
      this.tabshow = true;
      this.loginshow = false;
      console.log('测试的用户id：'+ localStorage.getItem('uid'));
      console.log('测试的司机id：'+ localStorage.getItem('driver_id'));
    }
    // this.navCTRL.push(relation_account);
    // 电话号码检测先不做
    // Sim.getSimInfo().then(
    //   (info) => alert('Sim info: '+ info),
    //   (err) => alert('Unable to get sim info: '+ err)
    // );
  }
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = NotePage;
  tab3Root: any = OtherPage;
  tab4Root: any = myPage;
  tabRoot:any = relation_account;
  constructor( public navCTRL:NavController) {

  }
  //判断登录的id信息

}
