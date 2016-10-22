/**
 * Created by Administrator on 2016/10/21.
 */
import { job } from '../note/job';

export class type{
  date:string;
  dayjob:job[];

  constructor(date: string, dayjob: job[]) {
    this.date = date;
    this.dayjob = dayjob;
  }
}
