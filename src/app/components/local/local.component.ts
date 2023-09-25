import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {
  local!: string;
  // name: string;
  constructor(private localData: DataService) { 
    // this.name = 'John Doe'; 

    // let array = [1, 2, 3];
    // for (let i = 0; i < array.length; i++) {
    //   console.log(array[i]);
    // }

  }

  ngOnInit(): void {

  }

 

  addtolocal(data: string) {
    this.localData.addtolocal('key', data);
  }

}
