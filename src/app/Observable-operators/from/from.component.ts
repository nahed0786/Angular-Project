import { Component, OnInit } from '@angular/core';
import { filter, from, interval, map, mergeMap, reduce, take } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const source$ = from([10, 20, 30]);

    // source$.subscribe(value => {
    //   console.log(value);
    // });

    // const source1$ = from("Hello world!");

    // source1$.subscribe(value => {
    //   console.log(value);
    // });

    // const countries = new Map();

    // countries.set('in', 'India');
    // countries.set('np', 'Nepal');
    // countries.set('jp', 'Japan');
    // countries.set('br', 'Brazil');

    // const source2$ = from(countries);

    // source2$.subscribe(value => {
    //   console.log(value);
    // });


    // const array = [1, 2, 3, 4, 5];
    // const source$ = from(array);
    // source$.subscribe(
    //   value => console.log(value)
    // );



    // const words = ['I', 'love', 'programming', 'bengali', 'language'];

    // const source$ = from(words);

    // source$.pipe(
    //   filter(word => word.length > 4), 
    //   map(word => word.toUpperCase()),
    //   reduce((acc, curr) => acc + ' ' + curr) 
    // )
    //   .subscribe(
    //     result => console.log(result)
    //   );



    // const users = [
    //   { name: 'John', age: 25 },
    //   { name: 'Alice', age: 30 },
    //   { name: 'Bob', age: 20 },
    //   { name: 'Eve', age: 35 },
    //   { name: 'Mike', age: 28 }
    // ];

    // const source$ = from(users);

    // source$.pipe(
    //   filter(user => user.age >= 25),
    //   map(user => user.name), 
    //   reduce((acc, curr) => acc + ', ' + curr) 
    // )
    // .subscribe(
    //   result => console.log(result)
    // );



    // const numbers = [1, 2, 3, 4, 5];
    // const source$ = from(numbers);
    // source$.pipe(
    //   filter(num => num % 2 === 0), // Filter out even numbers
    //   map(num => num * 10), // Multiply the remaining numbers by 10
    //   mergeMap(num => interval(1000).pipe(take(5), map(i => num + i))), // Generate an interval sequence for each number
    //   take(10) // Take only the first 10 values
    // )
    //   .subscribe(
    //     result => console.log(result)
    //   );

// Create an Observable from the array
    // const numbers = [1, 2, 3, 4, 5];
    // const source$ = from(numbers);
    // source$.pipe(
    //   filter(num => num % 2 === 0), // Filter out even numbers
    //   map(num => num * 10), // Multiply the remaining numbers by 10
    //   mergeMap(num => interval(1000).pipe(take(5), map(i => num + i))), // Generate an interval sequence for each number
    //   take(10) // Take only the first 10 values
    // )
    //   .subscribe(
    //     result => console.log(result)
    //   );


  }
}


