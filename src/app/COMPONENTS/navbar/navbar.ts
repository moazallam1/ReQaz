import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthStateService, User } from '../../CORE/auth-state.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  mobileMenuOpen = false;
  private authState = inject(AuthStateService);
  private router = inject(Router);

  // Expose signals to template
  isLoggedIn = this.authState.isLoggedIn;
  currentUser = this.authState.currentUser;
  isAdmin = this.authState.isAdmin;

  ngOnInit(): void {
    // Initialize auth state from localStorage
    this.authState.initializeAuth();
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  logout(): void {
    this.authState.logout();
    this.router.navigate(['/']);
    this.mobileMenuOpen = false;
  }

  navigateToDashboard(): void {
    if (this.isAdmin()) {
      this.router.navigate(['/dashboard/admin']);
    } else {
      this.router.navigate(['/dashboard/user']);
    }
    this.mobileMenuOpen = false;
  }

  /**
   * Mock login for testing - User role
   */
  testLogin(): void {
    const mockUser: User = {
      id: '1',
      name: 'أحمد محمد',
      email: 'ahmed@example.com',
      role: 'user',
    };
    const mockToken = 'test_token_user_' + Date.now();
    this.authState.setLoggedIn(mockToken, mockUser);
    this.router.navigate(['/dashboard/user']);
    this.mobileMenuOpen = false;
  }

  /**
   * Mock login for testing - Admin role
   */
  testAdminLogin(): void {
    const mockAdmin: User = {
      id: '2',
      name: 'محمد الإداري',
      email: 'admin@example.com',
      role: 'admin',
    };
    const mockToken = 'test_token_admin_' + Date.now();
    this.authState.setLoggedIn(mockToken, mockAdmin);
    this.router.navigate(['/dashboard/admin']);
    this.mobileMenuOpen = false;
  }
}
