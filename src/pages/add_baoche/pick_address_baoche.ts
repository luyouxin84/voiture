/**
 * Created by Administrator on 2016/11/14.
 */
import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
  selector:'pick_add',
  templateUrl:'pick_address_baoche.html'
})
export class pick_address_baoche{
  @Input() list :any[];
  @Output() selected = new EventEmitter<string>();
  constructor() {

  }
  pick( t:any ){
    console.log( '子菜单选择：' );
    console.log( t.target.value );
    this.selected.emit( t.target.value );
  }

}
