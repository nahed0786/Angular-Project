import { Component, OnInit } from '@angular/core';
import { interval, timeout } from 'rxjs';

@Component({
  selector: 'app-time-out',
  templateUrl: './time-out.component.html',
  styleUrls: ['./time-out.component.css']
})
export class TimeOutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //  const source$ = interval(1000);

    // source$.pipe(timeout(1200)).subscribe(value => {
    //   console.log(value);
    // });
  }

}
