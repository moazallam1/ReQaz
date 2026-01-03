import { Component, OnInit, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { AuthStateService } from './SERVICES/auth-state.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  implements OnInit{
  protected readonly title = signal('Angular_20_Project_Setup');
  private authState = inject(AuthStateService);

  ngOnInit(): void {
    initFlowbite();
    // Initialize auth state from localStorage
    this.authState.initializeAuth();
  }
}
