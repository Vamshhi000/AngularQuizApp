import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finalscore',
  templateUrl: './finalscore.component.html',
  styleUrls: ['./finalscore.component.css']
})
export class FinalscoreComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<FinalscoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private router:Router) { }

  ngOnInit(): void {
console.log(this.data)
    this.score=this.data.score
  }

  score:number;

  
  clicks(){
    this.dialogRef.close();
    this.router.navigate(['/leader']);
  }


  
}
