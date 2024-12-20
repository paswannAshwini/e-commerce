import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const isAuthenticated = !! localStorage.getItem('authToken');

  if(isAuthenticated){
    return true;
  }
  else{
    const router = new Router();
    router.navigate(['/auth/login']);
    return false;
  }
 
};
