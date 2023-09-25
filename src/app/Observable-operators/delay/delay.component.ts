import { Component, OnInit } from '@angular/core';
import { delay, interval, of } from 'rxjs';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.css']
})
export class DelayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //  const source$ = of(1, 2);
    // const source$ = interval(1000);
    // source$.pipe(delay(5000)).subscribe(value => {
      // console.log(value);
    // });
  }

}
