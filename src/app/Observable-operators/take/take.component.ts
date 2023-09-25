import { Component, OnInit } from '@angular/core';
import { interval, of, take } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const source$= interval(1000);
    // source$.pipe(take(5)).subscribe(count => {
    //   console.log(count);

    // })


    const source = of(1, 2, 3, 4, 5);
    const result = source.pipe(take(4));

    result.subscribe(value => console.log(value));
  }

}
