import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService{

  constructor() { }
  authenticate(username, password){
    if(username ==="abc@gmail.com" && password=="root"){
      sessionStorage.setItem('authenticatedUser', username);
      return true
    }
    else{
      return false
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  logOut(){
    sessionStorage.removeItem('authenticatedUser');
  }
} 
 
