import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { UserService } from '../user.service';

export const guardGuard: CanActivateFn = (route, state) => {
  const check = inject(UserService);
  const router = new Router();
  if (check.checkRole()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
