import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogComponent } from "../mat-dialog/mat-dialog.component";


export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(public dialog: MatDialog) { }
  
  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: '450px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
