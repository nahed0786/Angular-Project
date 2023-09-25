import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-data-sharing',
  templateUrl: './data-sharing.component.html',
  styleUrls: ['./data-sharing.component.css']
})
export class DataSharingComponent implements OnInit {

  // constructor(private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
  }

//   sendData(): void {
//     // send data to subscribers via observable subject
//     this.dataSharingService.sendData('Send Data from data-sharing Component to home Component!');
// }

// clearData(): void {
//     // clear data
//     this.dataSharingService.clearData();
// }

}
