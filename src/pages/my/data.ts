/**
 * Created by Administrator on 2016/11/16.
 */
export interface BillList {
  id: string;
  driver_id: string;
  Amount: string;
  balance: string;
  billtime: string;
  memo?: any;
  picture?: any;
  status: string;
  approvaltime?: any;
  isAdd: string;
}

export interface Sum {
  sum: string;
}

export interface Result {
  BillList: BillList[];
  Sum: Sum;
}

export interface RootObject {
  code: string;
  message: string;
  result: Result;
}
