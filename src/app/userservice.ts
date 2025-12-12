import { Injectable } from '@angular/core';
import { Filment } from './filmservice';

@Injectable({
  providedIn: 'root',
})
export class User {
    username:string="Login";
    favfilm:Filment[]=[];
    constructor(){
      this.favfilm.push( { titre: "Dune - Deuxième partie", annee: "2024", note: "8.6/10", duree: "2h" },{titre: "Mean Girls (Lolita Malgré Moi)", annee: "2024", note: "6.1/10", duree: "1h 52min"},
         { titre: "The Family Plan 2 ", annee: "2025", note: "5.6/10", duree: "1h 46min " },
            { titre: "The Dreadful", annee: "2025", note: "4.6/10", duree: "1h 36min" },
      );
    }
    getall():Filment[]{
      return this.favfilm;
    }
}
