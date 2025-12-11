import { Component, OnInit } from '@angular/core';
import { Search } from "../search/search";
import { Cartefilm } from "../cartefilm/cartefilm";
import { Footer } from "../footer/footer";
import { Filmservice } from '../filmservice';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [Cartefilm, Footer,CommonModule],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
 