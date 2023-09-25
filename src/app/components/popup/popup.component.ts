
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  Openpopup() {
    var popup = this.dialog.open(TodoComponent, {
      height: 'auto',
      width: '963px',
      //  panelClass: 'ManualLogHoursModal',
      disableClose: true,
      data: {
        title: 'user data'
      }

    });
    popup.afterClosed().subscribe(item => {
      console.log(item);

    })

  }


}
