export interface LeaveList {
  id: string;
  driver_id: string;
  leavetime: string;
  time: string;
  context: string;
  Approver?: any;
  statue?: any;
  leaveDate?:any;
}

export interface Total {
  count: string;
}

export interface Result {
  LeaveList: LeaveList[];
  Total: Total;
}

export interface RootObject {
  code: string;
  message: string;
  result: Result;
}
