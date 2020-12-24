import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss']
})
export class MyTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
}

@Output() newItemEvent = new EventEmitter<string>();
addNewItem(value:string) {
  this.newItemEvent.emit(value);
}




}
