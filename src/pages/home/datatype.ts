/**
 * Created by Administrator on 2016/10/22.
 */
export interface List {
  id: string;
  number: string;
  driver_id: string;
  uid: string;
  startingPoint: string;
  endPoint: string;
  startingTime: string;
  useDate: string;
  status: string;
  mileage: string;
  ordertime: string;
  price: string;
  type: string;
  nickname: string;
  account: string;
  UserStatus: string;
}

export interface Result {
  List: List[];
}

export interface RootObject {
  code: string;
  message: string;
  result: Result;
}

