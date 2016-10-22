/**
 * Created by Administrator on 2016/10/21.
 */
import {Component, Input} from '@angular/core';
import { job } from  '../note/job';

@Component({
  templateUrl:'detail.html',
  selector:'detail-date'
})
export class detaildate{
  @Input() todos:job [];
  constructor() {

  }
}
