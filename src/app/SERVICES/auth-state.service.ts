import { Injectable, signal, computed, effect } from '@angular/core';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  avatar?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  // Signals
  private tokenSignal = signal<string | null>(this.getTokenFromStorage());
  private userSignal = signal<User | null>(this.getUserFromStorage());

  // Computed
  isLoggedIn = computed(() => !!this.tokenSignal() && !!this.userSignal());
  currentUser = computed(() => this.userSignal());
  userRole = computed(() => this.userSignal()?.role || null);
  isAdmin = computed(() => this.userRole() === 'admin');

  constructor() {
    // Sync localStorage whenever signals change
    effect(() => {
      const token = this.tokenSignal();
      if (token) {
        localStorage.setItem('token', token);
      } else {
        localStorage.removeItem('token');
      }
    });

    effect(() => {
      const user = this.userSignal();
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.removeItem('user');
      }
    });
  }

  /**
   * Initialize auth state from localStorage
   */
  initializeAuth(): void {
    const token = this.getTokenFromStorage();
    const user = this.getUserFromStorage();
    this.tokenSignal.set(token);
    this.userSignal.set(user);
  }

  /**
   * Set user as logged in
   */
  setLoggedIn(token: string, user: User): void {
    this.tokenSignal.set(token);
    this.userSignal.set(user);
  }

  /**
   * Logout user
   */
  logout(): void {
    this.tokenSignal.set(null);
    this.userSignal.set(null);
  }

  /**
   * Get token from localStorage
   */
  private getTokenFromStorage(): string | null {
    if (typeof localStorage === 'undefined') return null;
    return localStorage.getItem('token');
  }

  /**
   * Get user from localStorage
   */
  private getUserFromStorage(): User | null {
    if (typeof localStorage === 'undefined') return null;
    const userJson = localStorage.getItem('user');
    if (!userJson) return null;
    try {
      return JSON.parse(userJson);
    } catch {
      return null;
    }
  }

  /**
   * Get current token
   */
  getToken(): string | null {
    return this.tokenSignal();
  }

  /**
   * Get current user
   */
  getUser(): User | null {
    return this.userSignal();
  }
}
