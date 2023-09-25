import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements OnInit {
  receivedData: any;
  constructor() { }

  ngOnInit(): void {
  }

  handleChildData(data: any) {
    this.receivedData = data;
    console.log('Received data:', data);
  }

}
