import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../userservice';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login{
  constructor(private router:Router){}
  
gotosignin():void {
     this.router.navigate(['/signin']);
}
gotoaccount():void{
  this.router.navigate(['/useraccount']);
}

}

