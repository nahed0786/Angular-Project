import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  heroList: string[] = []
  heroName: string = '';
  foods: string[] = []
  constructor() { }

  ngOnInit(): void {
  }

  addHero() {
    console.log(this.heroName);
    this.heroList.push(this.heroName)
  }

  afterFoofAdd(food: string) {
    this.foods.push(food)

  }

}
