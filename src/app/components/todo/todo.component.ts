
import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  inputdata: any;
  closemessage = 'closed using directive'
  list: any[] = [];


  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
  private ref: MatDialogRef<TodoComponent>) { }

  ngOnInit(): void {
    this.inputdata = this.data;
  }

  closepopup() {
    this.ref.close('close using function');
  }

  addTask(item: string) {
    // console.log(item);
    this.list.push({
      id: this.list.length,
      name: item
    });
    console.log(this.list);

  }

  dltname(index: number) {
    if (index > -1) {
      this.list.splice(index, 1);
    }
    console.log(this.list);

  }

}
