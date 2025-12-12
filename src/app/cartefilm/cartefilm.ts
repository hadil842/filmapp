import { Component, OnInit  } from '@angular/core';
import { Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-cartefilm',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './cartefilm.html',
  styleUrl: './cartefilm.scss',
})
export class Cartefilm {
      nom:string="Login";
infosfilm: any;
   constructor(private router:Router){
   }
   gotodetails():void{
    this.router.navigate(['/infosfilm']);
   }
}
