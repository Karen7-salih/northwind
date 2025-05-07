import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
export const loginGuard: CanActivateFn = (route, state) => {


    // If we have a token: 
    const token = localStorage.getItem("token");
    if(token) return true;

    
    // If we don't have a token: 
    alert("You are not logged in");
    const router = inject(Router);
    router.navigate(["/login"]);
    return false;
    
};