import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Input() list!: string[];
  @Output() foodEvt: EventEmitter<string> = new EventEmitter<string>();
  foodName: string = '';
  enteredText!: string;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }
  
  OnBtnClick(){
    this.dataService.raiseDataEmitterEvent(this.enteredText)
  }


  delname(index: number) {
    this.list.splice(index, 1);
    console.log(this.list);
  }
  addToFood(value: any) {
    this.foodEvt.emit(value);
  }

}
