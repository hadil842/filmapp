import { Component, OnInit } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { User } from '../userservice';
import { Filment } from '../filmservice';
import { CommonModule } from '@angular/common';
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-useraccount',
  imports: [Navbar, CommonModule, Footer],
  templateUrl: './useraccount.html',
  styleUrl: './useraccount.scss',
})
export class Useraccount implements OnInit{
      favfilm:Filment[]=[];
      constructor(private userservice:User){}
      ngOnInit(): void {
       this.favfilm=this.userservice.getall();}
      supprimer(item:string):void{
        this.userservice.supprimerelt(item);
        this.favfilm=this.userservice.getall();
      }
      supprimertout():void{
        this.userservice.supprimertout();
        this.favfilm=[];
      }
  }
