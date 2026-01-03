import { Injectable } from '@angular/core';
import { Router, CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthStateService } from '../SERVICES/auth-state.service';

@Injectable({
  providedIn: 'root',
})
class AuthGuardService {
  constructor(
    private authState: AuthStateService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authState.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}

export const authGuard: CanActivateFn = (route, state) => {
  const guard = new AuthGuardService(
    new AuthStateService(),
    new Router()
  );
  return guard.canActivate(route, state);
};
