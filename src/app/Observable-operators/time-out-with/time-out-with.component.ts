import { Component, OnInit } from '@angular/core';
import { interval, of, timeoutWith } from 'rxjs';

@Component({
  selector: 'app-time-out-with',
  templateUrl: './time-out-with.component.html',
  styleUrls: ['./time-out-with.component.css']
})
export class TimeOutWithComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const source$ = interval(1000);
    // const alt$ = of('Hello World!');

    // source$.pipe(timeoutWith(1200, alt$)).subscribe(value => {
    //   console.log(value);
    // });
  }

}
