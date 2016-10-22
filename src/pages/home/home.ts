import { Component ,OnInit} from '@angular/core';

import { NavController } from 'ionic-angular';
import { type } from '../home/datatype';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  switchFunction:string;
  joblist:type[]=[];
  constructor(public navCtrl: NavController) {
  }

   ngOnInit(): void {
     this.joblist.push(new type('按里程，路程约20公里','广西南宁市西乡塘区友爱北路26号','广西南宁市大学路广西民族大学',
       'facelink','2016年10月22日16:47:10',
       '13941549183','150.00','开始'));
  }
}
