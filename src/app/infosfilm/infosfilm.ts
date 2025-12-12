import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-infosfilm',
  imports: [],
  templateUrl: './infosfilm.html',
  styleUrl: './infosfilm.scss',
})
export class Infosfilm implements OnInit {
    film = {
  id: 2,
  title: "Spider-Man: Across the Spider-Verse",
  originalTitle: "Spider-Man: Across the Spider-Verse",
  year: 2023,
  duration: "2h 20min",
  rating: 8.6,
  votes: "312,459",
  image: "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
  backdrop: "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  synopsis: "Miles Morales revient pour une nouvelle aventure époustouflante dans le multivers Spider-Man. Après avoir rencontré Gwen Stacy, le sympathique héros de Brooklyn est catapulté à travers le Multivers, où il rencontre une équipe de Spider-People chargée de protéger son existence même. Mais lorsque les héros s'opposent sur la façon de gérer une nouvelle menace, Miles doit se battre pour sauver ceux qu'il aime.",
  director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
  writers: ["Phil Lord", "Christopher Miller", "Dave Callaham"],
  cast: [
    { 
      name: "Shameik Moore", 
      character: "Miles Morales / Spider-Man", 
      image: "https://tse2.mm.bing.net/th/id/OIP.xo6er7ejJ9f-B1UQq3hsrQHaJe?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" 
    },
    { 
      name: "Hailee Steinfeld", 
      character: "Gwen Stacy / Spider-Woman", 
      image: "https://th.bing.com/th/id/R.d00fad6fb04a5da5109f8e280d414c69?rik=eccIrWsCv8TRjQ&pid=ImgRaw&r=0" 
    },
    { 
      name: "Oscar Isaac", 
      character: "Miguel O'Hara / Spider-Man 2099", 
      image: "https://th.bing.com/th/id/R.2a737bf13ed04ef7a5881f2705b18303?rik=8UKZFiJLx2Vc%2bw&riu=http%3a%2f%2fwww.cinemapassion.com%2fphotos-personnalites%2fOscar-Isaac-photo-8093.jpg&ehk=224ia5DDoMzzBoklnTniOuJTB2ezhyFU%2boi68HSEYZQ%3d&risl=&pid=ImgRaw&r=0" 
    },
    { 
      name: "Brian Tyree Henry", 
      character: "Jefferson Davis", 
      image: "https://th.bing.com/th/id/OIP.6rlJ5QwSj3W8taIkGyQ8rwHaJ3?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" 
    },
    { 
      name: "Lauren Vélez", 
      character: "Rio Morales", 
      image: "https://tse4.mm.bing.net/th/id/OIP.tzPfck_-wL9_eSY8TvBElQHaKU?cb=ucfimg2&ucfimg=1&w=735&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3" 
    },
    { 
      name: "Jake Johnson", 
      character: "Peter B. Parker", 
      image: "https://th.bing.com/th/id/OIP.BEG9NSX_y28ZVKw9HGY4PAHaJ3?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" 
    },
  ],
  genres: ["Animation", "Action", "Aventure", "Science-fiction", "Super-héros"],
  language: "Anglais",
  country: "États-Unis",
  budget: "100 millions $",
  boxOffice: "690.5 millions $",
  releaseDate: "2 juin 2023",
  production: "Sony Pictures Animation, Marvel Entertainment",
  awards: "Oscar du meilleur film d'animation (2024), BAFTA du meilleur film d'animation",
};

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Si vous utilisez des routes avec ID de film
    const filmId = this.route.snapshot.paramMap.get('id');
    console.log('Film ID:', filmId);
    // Ici vous pourriez charger les données depuis une API
  }

  watchFilm() {
    alert(`Lecture de "${this.film.title}" en cours...`);
  }

  addToFavorites() {
    alert(`"${this.film.title}" a été ajouté aux favoris !`);
  }

  shareFilm() {
    alert(`Partager "${this.film.title}" sur les réseaux sociaux`);
  }

  getStars(rating: number): number[] {
    const starsCount = Math.round(rating / 2);
    return Array(starsCount).fill(0);
  }
}
