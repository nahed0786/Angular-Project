import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.css']
})
export class TakeUntilComponent implements OnInit, OnDestroy {
  switchOff$: Subject<any> = new Subject<any>();
  public count: number;
  constructor() { }


  ngOnInit(): void {
    const source$ = interval(1000);
    source$.pipe(takeUntil(this.switchOff$)).subscribe(count => {
      console.log(count);
      this.count = count;
    });
    setTimeout(() => {
      this.stop();
    }, 5000);
  }

  stop(): void {
    this.switchOff$.next(0);
  }

  ngOnDestroy(): void {
    console.log('OnDestroy', this.count);

    this.switchOff$.next(0)

  }

}
