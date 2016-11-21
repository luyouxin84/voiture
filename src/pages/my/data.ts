export interface BillList {
  id: string;
  driver_id: string;
  Amount: string;
  balance: string;
  billtime: string;
  display_billtime?:string;
  memo?: any;
  picture?: any;
  status: string;
  approvaltime?: any;
  isAdd: string;
}

export interface Result {
  BillList: BillList[];
  Sum: string;
}

export interface RootObject {
  code: string;
  message: string;
  result: Result;
}
