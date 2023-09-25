import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // data: any[] = [];
  // subscription: Subscription;

  constructor(private dataSharingService: DataSharingService) {
    // subscribe to home component data
//     this.subscription = this.dataSharingService.getData().subscribe(res => {
//         if (res) {
//             this.data.push(res);
//         } else {
//             // clear data when empty data received
//             this.data = [];
//         }
//     });
}

  ngOnInit(): void {
  }
  // ngOnDestroy() {
  //     // unsubscribe to ensure no memory leaks
  //     this.subscription.unsubscribe();
  // }

}
