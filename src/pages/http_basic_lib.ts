import {Http, Headers} from "@angular/http";
import {Injectable} from "@angular/core";


@Injectable()
export class http_basic_lib{

  constructor(public http:Http)
  {

  }
  http_service_get( url:string ):any{
    this.http.get( url)
      .subscribe(
        res => {
          let data = res.json();
          if ( data.code ==='200'){
            console.log( data.message);
            return data;
          } else {
            console.log( data.code);
            console.log( data.message);
            return null
          }
        }
      )
  }
  http_service_post ( url :string , param:string ,target:any,callback):any{
    let data:any;
    let headers = new Headers();
    console.log(param);
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    this.http.post( url,param,{headers:headers})
      .subscribe(
        res => {
          data = res.json();
          if ( data.code ==='200'){
            console.log( data.message);
            target = data;
            return 'done';
          } else {
            console.log( data.code);
            console.log( data.message);
            return null
          }
        },
        error => {
          console.log("Error: ", error)
        },
        () =>callback
      );
  }
}
