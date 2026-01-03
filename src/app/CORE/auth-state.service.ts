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
  private tokenSignal = signal<string | null>(this.getTokenFromStorage());
  private userSignal = signal<User | null>(this.getUserFromStorage());

  isLoggedIn = computed(() => !!this.tokenSignal() && !!this.userSignal());
  currentUser = computed(() => this.userSignal());
  userRole = computed(() => this.userSignal()?.role || null);
  isAdmin = computed(() => this.userRole() === 'admin');

  constructor() {
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

  initializeAuth(): void {
    const token = this.getTokenFromStorage();
    const user = this.getUserFromStorage();
    this.tokenSignal.set(token);
    this.userSignal.set(user);
  }

  setLoggedIn(token: string, user: User): void {
    this.tokenSignal.set(token);
    this.userSignal.set(user);
  }

  logout(): void {
    this.tokenSignal.set(null);
    this.userSignal.set(null);
  }

  private getTokenFromStorage(): string | null {
    if (typeof localStorage === 'undefined') return null;
    return localStorage.getItem('token');
  }

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

  getToken(): string | null {
    return this.tokenSignal();
  }

  getUser(): User | null {
    return this.userSignal();
  }
}
