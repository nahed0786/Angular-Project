import { Component, OnInit } from '@angular/core';
import { mapTo, of } from 'rxjs';

@Component({
  selector: 'app-map-to',
  templateUrl: './map-to.component.html',
  styleUrls: ['./map-to.component.css']
})
export class MapToComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //  const source$ = of(1, 2, 3, 4 ,5,6,7);

    // source$.pipe(mapTo('a')).subscribe(value => {
    //   console.log(value);
    // });
  }

}
