import { Component } from '@angular/core';
import { Search } from "../search/search";
import { Cartefilm } from "../cartefilm/cartefilm";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [Search, Cartefilm, Footer],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {

}
