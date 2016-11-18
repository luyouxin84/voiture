import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {create_account} from "../create_account/create_account";
import { Md5 } from '../md5/md5';
import {http_basic_lib} from "../http_basic_lib";


@Component({
  templateUrl:'relation_account.html',
  selector:'relation_account'
})
export class relation_account{

  constructor(public navCTRL:NavController,public post_login:http_basic_lib) {
  }
  login(id:string,pass:string){
    pass = Md5.hashStr(pass).toString();
    let params = 'account='+id+'&password='+pass;
    this.post_login.http_service_post('carLogin',params)
      .subscribe(
        res =>{
          let code = res.code;
          console.log(res);
          if ( code == '200'){
            localStorage.setItem( 'uid',res.result.uid);
            localStorage.setItem('driver_id',res.result.id);
            location.reload();
          } else {
            alert('用户名和密码错误！'+ res.message);
            localStorage.removeItem('uid');
          }
        },
        error =>{
          console.log(error)
        },
        ()=>{
          // location.reload();
        }
      )
  }
  new_user(){
      this.navCTRL.push( create_account );
  }
  passMd5(e:string){
    console.log( Md5.hashStr(e));
  }

}
