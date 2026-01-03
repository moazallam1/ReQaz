import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../COMPONENTS/navbar/navbar';
import { Footer } from '../../COMPONENTS/footer/footer';

@Component({
  selector: 'app-public-layout',
  imports: [Navbar, Footer, RouterOutlet],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.css',
})
export class PublicLayout {}
