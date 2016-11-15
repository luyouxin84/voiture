


export interface Result {
 title?:string;
  time:string;
  context:string;
}

export class day {
  date_of_day: string;
  job: Result[];

  constructor(date_of_day: string, job: Result[]) {
    this.date_of_day = date_of_day;
    this.job = job;
  }
}
