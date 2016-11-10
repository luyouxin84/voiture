/**
 * Created by Administrator on 2016/11/10.
 */
export interface OrderDetail {
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
  datetime: string;
  context: string;
  ZcEvaluateLevel: string;
  nickname: string;
  account: string;
}

export interface Result {
  OrderDetail: OrderDetail[];
}

export interface RootObject {
  code: string;
  message: string;
  result: Result;
}
