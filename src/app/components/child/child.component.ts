import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck ,AfterContentInit, 
                           AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{


  // Its not a part of lifecycle hooks but its executed first.
  constructor() { 
    console.log("Constructor"); 
  }

  @Input() title:string
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onChanges call on Input decorator");  
  }

  ngOnInit(): void {
    console.log('call onInit');
    
  }

  ngDoCheck(): void {
    console.log("When we fire an event like button click then call ngDoCheck-------call ngDoChecked");
    
  }

  ngAfterContentInit(): void {
    console.log('If the ngContent changes then call AfterContentInit---- call ngAfterContent Init ');
    
  }

  ngAfterContentChecked(): void {
    console.log("call   ngAfterContentChecked");
    
  }

  ngAfterViewInit(): void {
    console.log('call ngAfterViewInit');
    
  }

  ngAfterViewChecked(): void {
    console.log('call ngAfterViewChecked');
    
  }
  

  ngOnDestroy(): void {
    console.log('call  ngOnDestroy ');
    
  }
  
 
 
 

 

  

}
