import { Component } from '@angular/core';
import { Router, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
   constructor(private router:Router){}
   gotomain():void{
    this.router.navigate(['/main']);
   }
   gotogenre():void{
    this.router.navigate(['/genre']);
   }
   gotonews():void{
    this.router.navigate(['/news']);
   }
   gotologin():void{
    this.router.navigate(['/login']);
   }
   gotoacteur():void{
    this.router.navigate(['/acteur']);
   }

}
