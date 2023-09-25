import { Component, OnInit } from '@angular/core';
import { interval, of, timestamp } from 'rxjs';

@Component({
  selector: 'app-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.css']
})
export class TimestampComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //  const source$ = interval(1000);

    // source$.pipe(timestamp()).subscribe(value => {
    //   console.log(value);
    // });


    // const source$ = of('Item 1', 'Item 2', 'Item 3');

    // // Use the timestamp() operator
    // source$.pipe(timestamp())
    //   .subscribe(
    //     value => console.log(value)
    //   );


  }

}
