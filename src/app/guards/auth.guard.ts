import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
  const isActive = localStorage.getItem('isActive');

  if(isActive){
    return true
  } else {
    const router = inject(Router)
    router.navigate(['/login'])
    return false;
  }

};
