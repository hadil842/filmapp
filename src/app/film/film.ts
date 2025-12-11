import { Component, OnInit } from '@angular/core';
import { Filmservice,Filment } from '../filmservice';
import { CommonModule } from '@angular/common';
import { Footer } from "../footer/footer";
@Component({
  selector: 'app-film',
  imports: [CommonModule, Footer],
  templateUrl: './film.html',
  styleUrls: ['./film.scss'],
})
export class Film implements OnInit{
      genreactif:string ="";
      ngOnInit(): void {
         this.MyMap=this.filmservice.getall();
      }
      constructor(private filmservice:Filmservice){}
      MyMap =new Map<string,Filment[]>();
      estactif(item:string){
        this.genreactif=item;
      }
      
    }
