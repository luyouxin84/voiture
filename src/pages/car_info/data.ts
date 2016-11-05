export interface Result2 {
  id: string;
  cartype_id: string;
  driver_id: string;
  picture1?: string;
  picture2?: any;
  picture3?: any;
  number: string;
  color: string;
  checktime: string;
}

export interface Result {
  Result: Result2;
}

export interface data {
  code: string;
  message: string;
  result: Result;
}
