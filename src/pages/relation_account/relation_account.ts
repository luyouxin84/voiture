import {Component} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {NavController} from "ionic-angular";
import {create_account} from "../create_account/create_account";
@Component({
  templateUrl:'relation_account.html',
  selector:'relation_account'
})
export class relation_account{

  constructor(public http:Http,public navCTRL:NavController) {
  }
  login(id:string,pass:string){
    console.log( id + '   ' + pass);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    let params = 'account='+id+'&password='+pass;
    console.log(params);
    this.http.post('http://www.shengyoudengwang.com/Service/Car/carLogin.html',params,{headers:headers})
      .subscribe( res =>{
        let code = res.json().code;
        console.log(code);
        if ( code = '200'){
          localStorage.setItem( 'uid',res.json().result.uid);
          location.reload()
        }
        }
      )
  }
  new_user(){
      this.navCTRL.push( create_account );
  }
}
