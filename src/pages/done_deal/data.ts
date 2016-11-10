export interface Order {
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
}

export interface Total {
  count: string;
  countNotPay: string;
}

export interface Result {
  Order: Order[];
  Total: Total;
}

export interface RootObject {
  code: string;
  message: string;
  result: Result;
}
