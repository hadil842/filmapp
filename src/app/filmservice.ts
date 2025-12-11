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
    ActeurMap=new Map<string,Filment[]>();
    constructor(){
        this.dataMap.set("Action", [
            { titre: "Dune - Deuxième partie", annee: "2024", note: "8.6/10", duree: "2h" },
            { titre: "The Beekeeper", annee: "2024", note: "6.4/10", duree: "1h45min" },
            {titre: "Furiosa : Une saga Mad Max (Furiosa: A Mad Max Saga)", annee: "2024", note: "7.8/10", duree: "2h 27min"},
            {titre: "Dune - Deuxième partie (Dune: Part Two)", annee: "2024", note: "8.6/10", duree: "2h 46min"},
            {titre: "The Fall Guy", annee: "2024", note: "7.0/10", duree: "2h 6min"},
            {titre: "Civil War", annee: "2024", note: "7.2/10", duree: "1h 49min"},
            {titre: "Bad Boys : Ride or Die", annee: "2024", note: "6.9/10", duree: "1h 55min"},
        ]);
        
        this.dataMap.set("Comedy", [
            { titre: "Un petit truc en plus", annee: "2024", note: "7.4/10", duree: "1h 39min" },
            { titre: "Anyone But You (Tout sauf toi)", annee: "2023", note: "6.2/10", duree: "1h 43min" },
            {titre: "The Fall Guy", annee: "2024", note: "7.0/10", duree: "2h 6min"},
            {titre: "Deadpool & Wolverine", annee: "2024", note: "7.3/10", duree: "2h 7min"},
            {titre: "Mean Girls (Lolita Malgré Moi)", annee: "2024", note: "6.1/10", duree: "1h 52min"},
            {titre: "Drive-Away Dolls", annee: "2024", note: "5.7/10", duree: "1h 24min"},
        ]);
        this.dataMap.set("Drama", [
            { titre: "La Zone d'intérêt (The Zone of Interest)", annee: "2023", note: "7.5/10", duree: "1h 45min" },
            { titre: "Pauvres Créatures (Poor Things)", annee: "2023", note: "7.9/10", duree: "2h 21min" },
            {titre: "Challengers", annee: "2024", note: "7.4/10", duree: "2h 11min"},
            {titre: "The Bikeriders", annee: "2024", note: "7.1/10", duree: "1h 56min"},
            {titre: "Vice-Versa 2 (Inside Out 2)", annee: "2024", note: "7.7/10", duree: "1h 36min"},
            {titre: "Horizon : Une saga américaine - Chapitre 1", annee: "2024", note: "6.1/10", duree: "3h 1min"}
        ]);
        
        this.dataMap.set("Science Fiction", [
            { titre: "La Planète des singes : Le Nouveau Royaume", annee: "2024", note: "7.1/10", duree: "2h25min" },
            { titre: "Spaceman (L'Astronaute)", annee: "2024", note: "6.2/10", duree: "1h 47min" },
            {titre: "Dune - Deuxième partie", annee: "2024", note: "8.6/10", duree: "2h 46min"},
            {titre: "Atlas", annee: "2024", note: "5.6/10", duree: "1h 58min"},
            {titre: "Furiosa : Une saga Mad Max", annee: "2024", note: "7.8/10", duree: "2h 27min"},
            {titre: "La Planète des singes : Le Nouveau Royaume", annee: "2024", note: "7.2/10", duree: "2h 25min"},
            {titre: "Spaceman", annee: "2024", note: "5.5/10", duree: "1h 47min"}

        ]);
        
        this.dataMap.set("Horror", [
            { titre: "Late Night with the Devil", annee: "2023", note: "7.2/10", duree: "1h 33min" },
            { titre: "La Main (Talk to Me)", annee: "2023", note: "7.1/10", duree: "1h 35min" },
            {titre: "Immaculée (Immaculate)", annee: "2024", note: "5.5/10", duree: "1h 29min"},
            {titre: "La Malédiction : L'Origine (The First Omen)", annee: "2024", note: "6.4/10", duree: "2h"},
            {titre: "Abigail", annee: "2024", note: "5.5/10", duree: "1h 49min"},
        ]);
        this.ActeurMap.set("Tom Hanks", [
            { titre: "Here", annee: "2024", note: "6.3/10", duree: "1h 44min" },
            { titre: "Freaky Tales", annee: "2024", note: "6.3/10", duree: "1h 47min" },
            { titre: "Cloud Atlas", annee: "2012", note: "6.7/10", duree: "2h 52min" },
            { titre: "Seul au monde", annee: "2000", note: "7.8/10", duree: "2h 23min" },
            { titre: "Forrest Gump", annee: "1994", note: "8.8/10", duree: "2h 22min" }
        ]);
        this.ActeurMap.set("Kit Harington", [
            { titre: "The Family Plan 2 ", annee: "2025", note: "5.6/10", duree: "1h 46min " },
            { titre: "The Dreadful", annee: "2025", note: "4.6/10", duree: "1h 36min" },
            { titre: "Ma vie avec John F. Donovan", annee: "2018", note: "6.1/10", duree: "2h 3min" },
            { titre: "Mémoires de jeunesse", annee: "2015", note: "7.3/10", duree: "2h 9min" },
            { titre: "Brimstone", annee: "2017", note: "7.1/10", duree: "2h 28min" }
        ]);

    }
    
   
    getall1():  Map<string, Filment[]> {
        return this.dataMap;
    }
    getall2():Map<string,Filment[]>{
        return this.ActeurMap;
    }

}