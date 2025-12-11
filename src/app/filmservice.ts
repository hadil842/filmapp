import { Injectable } from '@angular/core';
export interface Filment {
  titre: string;
  annee: string; 
  note: string;
  duree: string;
}
@Injectable({
  providedIn: 'root'
})
export class Filmservice {
    dataMap = new Map<string, Filment[]>();
    constructor(){
        this.dataMap.set("Action", [
            { titre: "Dune - Deuxième partie", annee: "2024", note: "8.6/10", duree: "2h" },
            { titre: "The Beekeeper", annee: "2024", note: "6.4/10", duree: "1h45min" }
        ]);
        
        this.dataMap.set("Comedy", [
            { titre: "Un petit truc en plus", annee: "2024", note: "7.4/10", duree: "1h 39min" },
            { titre: "Anyone But You (Tout sauf toi)", annee: "2023", note: "6.2/10", duree: "1h 43min" }
        ]);
        this.dataMap.set("Drama", [
            { titre: "La Zone d'intérêt (The Zone of Interest)", annee: "2023", note: "7.5/10", duree: "1h 45min" },
            { titre: "Pauvres Créatures (Poor Things)", annee: "2023", note: "7.9/10", duree: "2h 21min" }
        ]);
        
        this.dataMap.set("Science Fiction", [
            { titre: "La Planète des singes : Le Nouveau Royaume", annee: "2024", note: "7.1/10", duree: "2h25min" },
            { titre: "Spaceman (L'Astronaute)", annee: "2024", note: "6.2/10", duree: "1h 47min" }
        ]);
        
        this.dataMap.set("Horror", [
            { titre: "Late Night with the Devil", annee: "2023", note: "7.2/10", duree: "1h 33min" },
            { titre: "La Main (Talk to Me)", annee: "2023", note: "7.1/10", duree: "1h 35min" }
        ]);}
    
   
    getall():  Map<string, Filment[]> {
        return this.dataMap;
    }
}