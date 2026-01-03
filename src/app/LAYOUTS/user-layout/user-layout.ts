import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../COMPONENTS/navbar/navbar';
import { Sidebar } from '../../COMPONENTS/sidebar/sidebar';

@Component({
  selector: 'app-user-layout',
  imports: [Navbar, Sidebar, RouterOutlet],
  templateUrl: './user-layout.html',
  styleUrl: './user-layout.css',
})
export class UserLayout {}
