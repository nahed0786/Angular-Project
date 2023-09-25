import { Component, OnInit } from '@angular/core';
import { filter, from, interval, map, mergeMap, of, reduce, take, takeLast, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //  const source$ = interval(1000);
    // source$.pipe(filter(value => {
    //   return value % 2 === 0;
    // })).subscribe(value => {
    //   console.log(value);
    // });




    //   const cities = [
    //     {
    //       name: 'Bangalore',
    //       country: 'India'
    //     },
    //     {
    //       name: 'Mumbai',
    //       country: 'India'
    //     },
    //     {
    //       name: 'Kathmandu',
    //       country: 'Nepal'
    //     },
    //     {
    //       name: 'Pokhara',
    //       country: 'Nepal'
    //     }
    //   ];

    //   const source$ = from(cities);

    //   source$.pipe(filter(value => {
    //     return value.country === 'Nepal' ;
    //   })).subscribe(value => {
    //     console.log(value);
    //   });



    //  let emplist:string[];
    //   emplist=["wasim","nahed","rarial"];
    //   console.log(emplist);

    // let numlist:Array<number>
    // numlist =[1,2,3,4,5];
    // console.log(numlist);
    // let results = numlist.filter((num)=>num>2);
    // console.log(results);


    // let numlist:Array<number>
    // numlist =[1,2,3,4,5];


    // let numlist:Array<number>
    // numlist =[1,2,3,4,5];
    // console.log(numlist);
    // let results = numlist.reduce((acc,num) => acc+num);
    // console.log(results);


    // const source$ = of(1, 2, 3, 4, 5);
    // source$.pipe(
    //   filter(value => value % 2 === 0)
    // )
    //   .subscribe(
    //     evenNumber => console.log(evenNumber)
    //   );



    // const source$ = of(3, 8, 1, 6, 4, 5, 2);
    // source$.pipe(
    //   filter(value => value < 5)
    // )
    //   .subscribe(
    //     filteredNumber => console.log(filteredNumber)
    //   );


    // const source$ = from([10, 20, 30, 40, 50]);
    // source$.pipe(
    //   filter(value => value % 2 === 0)
    // )
    //   .subscribe(
    //     evenNumber => console.log(evenNumber)
    //   );


    // const source$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    // source$.pipe(
    //   filter(value => value % 2 === 0), 
    //   map(value => value * 2), 
    //   take(3) 
    // )
    //   .subscribe(
    //     result => console.log(result)
    //   );



    // const source$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    // source$.pipe(
    //   filter(value => value % 2 === 0), // Filter out even numbers
    //   map(value => value * 3), // Multiply the remaining values by 3
    //   reduce((acc, curr) => acc + curr) // Sum all the values
    // )
    //   .subscribe(
    //     result => console.log(result)
    //   );



    // const source$ = from(['apple', 'banana', 'grape', 'orange', 'kiwi']);
    // source$.pipe(
    //   filter(fruit => fruit.length > 5), // Filter out fruits with length greater than 5
    //   map(fruit => fruit.toUpperCase()), // Convert the remaining fruits to uppercase
    //   mergeMap(fruit => from(fruit.split(''))), // Split each fruit into individual characters
    //   toArray() // Convert the characters into an array
    // )
    //   .subscribe(
    //     result => console.log(result)
    //   );


  }

}
