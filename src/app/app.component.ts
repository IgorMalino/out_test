import { Component } from '@angular/core';
let i: number = 1;
let price: number = 100+i;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyComponents';
  i=i+1;
  items = ["id:"+i+',product'+i+",price"+price, "id:"+ (i+1)+',product'+(i+1)+",price"+(price+1), "id:"+(i+2)+',product'+(i+2)+",price"+(price+2)];
  addItem(newItem: string){
    this.items.push(newItem)
  }
  removeFromList(index: number) {
    this.items.splice(index, 1)
    console.log(this.items)
  }
 





  

}
