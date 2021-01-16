import { Component, OnInit } from '@angular/core';

//Import the below component for implemeting dialogues in application
import {MatDialog, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {username:'',password:'', remember:false}
  constructor(public dialogref: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
  }

  onSubmit():void {
    console.log('User:',this.user);
    this.dialogref.close();
  }
}
