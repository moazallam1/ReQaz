import { Injectable } from '@angular/core';
import { Router, CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthStateService } from '../SERVICES/auth-state.service';

@Injectable({
  providedIn: 'root',
})
class AdminGuardService {
  constructor(
    private authState: AuthStateService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authState.isLoggedIn() && this.authState.isAdmin()) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}

export const adminGuard: CanActivateFn = (route, state) => {
  const guard = new AdminGuardService(
    new AuthStateService(),
    new Router()
  );
  return guard.canActivate(route, state);
};
