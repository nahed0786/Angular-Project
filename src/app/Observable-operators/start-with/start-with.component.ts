import { Component, OnInit } from '@angular/core';
import { interval, of, startWith } from 'rxjs';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.css']
})
export class StartWithComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //   const source$ = interval(1000);

    // source$.pipe(startWith(5)).subscribe(count => {
    //   console.log(count);
    // });
    // const source2$ = of(1, 2, 3, 4, 5);

    // source2$.pipe(startWith(-2)).subscribe(value => {
    //   console.log(value);
    // });
  }

}
