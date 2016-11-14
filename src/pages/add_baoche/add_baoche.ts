import {Component, OnInit, ElementRef, ViewChild, Renderer} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {copy} from "@ionic/app-scripts/dist";

@Component({
  templateUrl:'add_baoche.html',
  selector:'add_baoche'
})
export class add_baoche implements OnInit{

  test_list:map_item[]=[];
  first_menu:map_item[]=[];
  second_menu:map_item[]=[];
  third_menu:map_item[]=[];
  fourth_menu:map_item[]=[];
  dest_test_list:map_item[]=[];
  dest_first_menu:map_item[]=[];
  dest_second_menu:map_item[]=[];
  dest_third_menu:map_item[]=[];
  dest_fourth_menu:map_item[]=[];
  start:string;
  start_selected:boolean = false;
  end:string;
  end_selected:boolean = false;
  ngOnInit(): void {
    this.initProvinceData(this.test_list);
    this.initProvinceData(this.dest_test_list);
  }

  initProvinceData( t:any[]) {
    t.push(new map_item('110000','北京市'));
    t.push(new map_item('120000','天津市'));
    t.push(new map_item('130000','河北省'));
    t.push(new map_item('140000','山西省'));
    t.push(new map_item('150000','内蒙古自治区'));
    t.push(new map_item('210000','辽宁省'));
    t.push(new map_item('220000','吉林省'));
    t.push(new map_item('230000','黑龙江省'));
    t.push(new map_item('310000','上海市'));
    t.push(new map_item('320000','江苏省'));
    t.push(new map_item('330000','浙江省'));
    t.push(new map_item('340000','安徽省'));
    t.push(new map_item('350000','福建省'));
    t.push(new map_item('360000','江西省'));
    t.push(new map_item('370000','山东省'));
    t.push(new map_item('410000','河南省'));
    t.push(new map_item('420000','湖北省'));
    t.push(new map_item('430000','湖南省'));
    t.push(new map_item('440000','广东省'));
    t.push(new map_item('450000','广西壮族自治区'));
    t.push(new map_item('460000','海南省'));
    t.push(new map_item('500000','重庆市'));
    t.push(new map_item('510000','四川省'));
    t.push(new map_item('520000','贵州省'));
    t.push(new map_item('530000','云南省'));
    t.push(new map_item('540000','西藏自治区'));
    t.push(new map_item('610000','陕西省'));
    t.push(new map_item('620000','甘肃省'));
    t.push(new map_item('630000','青海省'));
    t.push(new map_item('640000','宁夏回族自治区'));
    t.push(new map_item('650000','新疆维吾尔自治区'));
    t.push(new map_item('990000','新疆建设兵团'));
  }

  test_select(t:any){
    console.log('目的地根目录选择');
    console.log(t.target.value);
    this.first_menu.splice(0);
    this.efface_start();
    this.http_service(t.target.value,this.first_menu);
  }
  first_menu_selected(t:any){
    console.log('接收到第一层数据');
    console.log(t);
    this.efface_start();
    this.second_menu.splice(0);
    this.http_service(t,this.second_menu);
  }
  second_menu_selected(t:any){
    console.log('接收到第2层数据');
    console.log(t);
    this.efface_start();
    this.third_menu.splice(0);
    this.http_service(t,this.third_menu);
  }
  third_menu_selected(t:any){
    console.log('接收到第3层数据');
    console.log(t);
    this.efface_start();
    this.fourth_menu.splice(0);
    this.http_service(t,this.fourth_menu);
  }
  fourth_menu_selected(t:any){
    console.log('接收到第4层数据');
    console.log(t);
    this.start = t;
    this.start_selected = true;
    // this.efface_start();
    // this.fourth_menu.splice(0);
    // this.http_service(t,this.fourth_menu);
  }
  http_service(t:any,list:any[]){
    console.log(t,list);
    let headers= new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    let params = 'id='+ t;
    this.http.post('http://www.shengyoudengwang.com/Service/Car/addressPriceProvince.html',params,{headers:headers})
      .subscribe( res =>
      {
        console.log( res.json());
        if ( res.json().code == '200'){
          for ( let i = 0; i < res.json().result.List.length ;i++ ) {
            list.push(new map_item(res.json().result.List[i].id, res.json().result.List[i].name))
          }
        } else{
          console.log('到底');
          this.start = t;
          this.start_selected = true;
        }
      })
  }
  efface_start(){
    this.start = null;
    this.start_selected = false;
  }
  dest_test_select(t:any){
    console.log('根目录选择');
    console.log(t.target.value);
    this.dest_first_menu.splice(0);
    this.efface_end();
    this.dest_http_service(t.target.value,this.dest_first_menu);
  }
  dest_first_menu_selected(t:any){
    console.log('接收到第一层数据');
    console.log(t);
    this.efface_end();
    this.dest_second_menu.splice(0);
    this.dest_http_service(t,this.dest_second_menu);
  }
  dest_second_menu_selected(t:any){
    console.log('接收到第2层数据');
    console.log(t);
    this.efface_end();
    this.dest_third_menu.splice(0);
    this.dest_http_service(t,this.dest_third_menu);
  }
  dest_third_menu_selected(t:any){
    console.log('接收到第3层数据');
    console.log(t);
    this.efface_end();
    this.dest_fourth_menu.splice(0);
    this.dest_http_service(t,this.dest_fourth_menu);
  }
  dest_fourth_menu_selected(t:any){
    console.log('接收到第4层数据');
    console.log(t);
    this.end = t;
    this.end_selected = true;
    // this.efface_start();
    // this.fourth_menu.splice(0);
    // this.http_service(t,this.fourth_menu);
  }
  dest_http_service(t:any,list:any[]){
    console.log(t,list);
    let headers= new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    let params = 'id='+ t;
    this.http.post('http://www.shengyoudengwang.com/Service/Car/addressPriceProvince.html',params,{headers:headers})
      .subscribe( res =>
      {
        console.log( res.json());
        if ( res.json().code == '200'){
          for ( let i = 0; i < res.json().result.List.length ;i++ ) {
            list.push(new map_item(res.json().result.List[i].id, res.json().result.List[i].name))
          }
        } else{
          console.log('到底');
          this.end = t;
          this.end_selected = true;
        }
      })
  }
  efface_end(){
    this.end = null;
    this.end_selected = false;
  }

  constructor(public http:Http) {
  }
  post(){

    if ( this.start_selected == false && this.end_selected == false ){
      console.log('不全');
    } else{
      console.log( this.start,this.end);
    }
  }

}

class map_item {
  value:string;
  name:string;

  constructor(value: string, name: string) {
    this.value = value;
    this.name = name;
  }
}
