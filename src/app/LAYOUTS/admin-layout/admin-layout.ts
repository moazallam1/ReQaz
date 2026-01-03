import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../COMPONENTS/navbar/navbar';
import { Sidebar } from '../../COMPONENTS/sidebar/sidebar';

@Component({
  selector: 'app-admin-layout',
  imports: [Navbar, Sidebar, RouterOutlet],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {}
