import { Injectable } from '@angular/core';
import { Filment } from './filmservice';

@Injectable({
  providedIn: 'root',
})
export class User {
    username:string="Login";
    favfilm:Filment[]=[];
    constructor(){
      this.favfilm.push( { titre: "Dune - Deuxième partie", annee: "2024", note: "8.6/10", duree: "2h" });
    }
    getall():Filment[]{
      return this.favfilm;
    }
}
