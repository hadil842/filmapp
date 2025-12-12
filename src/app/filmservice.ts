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
        this.ActeurMap.set("Jason Statham",[
            {titre: "The Beekeeper", annee: "2024", note: "6.8/10", duree: "1h 45min"},
            {titre: "Operation Fortune: Ruse de guerre", annee: "2023", note: "6.3/10", duree: "1h 54min"},
            {titre: "En eaux très troubles", annee: "2023", note: "5.0/10", duree: "1h 56min"},
            {titre: "Fast & Furious X", annee: "2023", note: "5.8/10", duree: "2h 21min"},
{titre: "Un homme en colère", annee: "2021", note: "7.1/10", duree: "1h 59min"},
{titre: "Fast & Furious: Hobbs & Shaw", annee: "2019", note: "6.5/10", duree: "2h 17min"},
{titre: "En eaux troubles", annee: "2018", note: "5.6/10", duree: "1h 53min"},
{titre: "Mechanic: Résurrection", annee: "2016", note: "5.7/10", duree: "1h 38min"},
        ])
        this.ActeurMap.set("Henry Cavill",[
            {titre: "Le Ministère de la Sale Guerre", annee: "2024", note: "7.4/10", duree: "2h 00min"},
            {titre: "Argylle", annee: "2024", note: "5.8/10", duree: "2h 19min"},
            {titre: "Enola Holmes 2", annee: "2022", note: "6.7/10", duree: "2h 09min"},
            {titre: "Zack Snyder's Justice League", annee: "2021", note: "7.9/10", duree: "4h 02min"},
            {titre: "Enola Holmes", annee: "2020", note: "6.6/10", duree: "2h 03min"},
            {titre: "Mission: Impossible - Fallout", annee: "2018", note: "7.7/10", duree: "2h 27min"},
            {titre: "Justice League", annee: "2017", note: "6.1/10", duree: "2h 00min"},
            {titre: "Batman v Superman : L'Aube de la Justice", annee: "2016", note: "6.0/10", duree: "2h 33min"},
        ])
        this.ActeurMap.set("Bill Skarsgård",[{ titre: "Nosferatu", annee: "2024", note: "6.3/10", duree: "2h 12min" },
{ titre: "The Crow", annee: "2024", note: "5.6/10", duree: "1h 51min" },
{ titre: "John Wick : Chapitre 4", annee: "2023", note: "6.5/10", duree: "2h 49min" },
{ titre: "Boy Kills World", annee: "2023", note: "5.6/10", duree: "1h 55min" },
{ titre: "Barbare", annee: "2022", note: "6.5/10", duree: "1h 42min" },
{ titre: "Les Éternels", annee: "2021", note: "5.7/10", duree: "2h 37min" },
{ titre: "Le Diable, tout le temps" , annee: "2020", note: "6.6/10", duree: "2h 18min" },
{ titre: "Ça : Chapitre 2" , annee: "2019", note: "5.5/10", duree: "2h 49min" }])
       this.ActeurMap.set("Florence Pugh",[{ titre: "Dune : Deuxième Partie", annee: "2024", note: "8.3/10", duree: "2h 46min" },
     { titre: "Oppenheimer", annee: "2023", note: "8.4/10", duree: "3h 00min" },
    { titre: "A Good Person", annee: "2023", note: "7.1/10", duree: "2h 08min" },
    { titre: "Don't Worry Darling", annee: "2022", note: "6.3/10", duree: "2h 02min" },
   { titre: "Le Chat Potté 2 : La Dernière Quête" , annee: "2022", note: "7.8/10", duree: "1h 40min" },
   { titre: "Black Widow", annee: "2021", note: "6.7/10", duree: "2h 14min" },
   { titre: "Les Filles du Docteur March", annee: "2019", note: "7.8/10", duree: "2h 15min" },
   { titre: "Midsommar", annee: "2019", note: "7.1/10", duree: "2h 28min" }])
   this.ActeurMap.set("Jennifer Lawrence",[{ titre: "Happiness Therapy", annee: "2012", note: "7.7/10", duree: "2h 02min" },
   { titre: "Winter's Bone", annee: "2010", note: "7.2/10", duree: "1h 40min" },
   { titre: "Hunger Games : L'Embrasement", annee: "2013", note: "7.5/10", duree: "2h 26min" },
   { titre: "American Bluff", annee: "2013", note: "7.2/10", duree: "2h 18min" },
  {titre: "Don't Look Up : Déni cosmique", annee: "2021", note: "7.2/10", duree: "2h 18min" },
  { titre: "Red Sparrow", annee: "2018", note: "6.6/10", duree: "2h 20min" },
  { titre: "Joy", annee: "2015", note: "6.6/10", duree: "2h 04min" },{ titre: "X-Men: Days of Future Past", annee: "2014", note: "7.9/10", duree: "2h 12min" },])
    }
    
   
    getall1():  Map<string, Filment[]> {
        return this.dataMap;
    }
    getall2():Map<string,Filment[]>{
        return this.ActeurMap;
    }

}