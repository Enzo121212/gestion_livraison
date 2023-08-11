import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() money : number = 0;
  @Output () takeMoney = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(){
    this.money -= 50; 
    this.takeMoney.emit(this.money)
  }

}
