import {Http, Headers ,RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";


@Injectable()
export class http_basic_lib{
  public baseUrl:string = 'http://www.shengyoudengwang.com/Service/Car/';
  constructor(public http:Http)
  {

  }
  http_service_get( url:string ):any{
    let _link = this.baseUrl+url
    return this.http.get( _link )
      .map ( res => res.json())
  }
  http_service_post ( url :string , param:string ):any{
    console.log('使用post方法访问api：'+ url + '参数为');
    console.log(param);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    let options = new RequestOptions({ headers: headers, method: "post" });
    let _link = this.baseUrl+url;
    return this.http.post( _link,param,options)
      .map(res => res.json());
  }
}
