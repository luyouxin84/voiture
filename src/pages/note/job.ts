export interface detail {
  id: string;
  title: string;
  context: string;
  memo_date: string;
  time: string;
  driver_id: string;
  isRemind: string;
}



export interface Result {
  length: number;
}

export interface RootObject {
  code: string;
  message: string;
  result: Result;
}
