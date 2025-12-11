import { Component, OnInit } from '@angular/core';
import { Footer } from "../footer/footer";
import { CommonModule } from '@angular/common';
import { Filment, Filmservice } from '../filmservice';

@Component({
  selector: 'app-acteur',
  imports: [Footer,CommonModule],
  templateUrl: './acteur.html',
  styleUrl: './acteur.scss',
})
export class Acteur implements OnInit{
   acteuractif:string="";
   constructor(private filmsercice:Filmservice){};
   ngOnInit(): void {
         this.MyMap=this.filmsercice.getall2();
   }
   MyMap =new Map<string,Filment[]>();
      estactif(item:string){
        this.acteuractif=item;
      }
}
