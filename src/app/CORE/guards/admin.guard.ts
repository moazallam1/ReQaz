import { Injectable, inject } from '@angular/core';
import { Router, CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthStateService } from '../auth-state.service';

export const adminGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authState = inject(AuthStateService);
  const router = inject(Router);

  if (authState.isLoggedIn() && authState.isAdmin()) {
    return true;
  }

  router.navigate(['/']);
  return false;
};
