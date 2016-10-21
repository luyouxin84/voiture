import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { NotePage } from '../note/note';
import { OtherPage } from '../other/other';
import { myPage } from '../my/my';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = NotePage;
  tab3Root: any = OtherPage;
  tab4Root: any = myPage;
  constructor() {

  }
}
