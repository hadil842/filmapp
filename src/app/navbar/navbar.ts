import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from "@angular/router";
import { User } from '../userservice';

@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
   nom:string="Login";
   constructor(private router:Router){
   }
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
    this.nom="Bonjour";
   }
   gotoacteur():void{
    this.router.navigate(['/acteur']);
   }

}
