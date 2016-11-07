export interface Result2 {
  id: string;
  uid: string;
  name: string;
  sex: string;
  picture?: any;
  getLicenseTime: string;
  language: string;
  phone: string;
  city: string;
  licenseNumber: string;
  licenseType: string;
  statue: string;
  idCard?: any;
  bankCard?: any;
  bankName?: any;
}

export interface Result {
  Result: Result2;
}

export interface RootObject {
  code: string;
  message: string;
  result: Result;
}/**
 * Created by Administrator on 2016/11/7.
 */
