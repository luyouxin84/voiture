/**
 * Created by Administrator on 2016/10/21.
 */
export class job{
  title:string;
  time:string;
  context:string;

  constructor(title: string, time: string, context: string) {
    this.title = title;
    this.time = time;
    this.context = context;
  }
}
