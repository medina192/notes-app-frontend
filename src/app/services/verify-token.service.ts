import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerifyTokenService {

  userLogin: boolean = false;

  constructor() { }

  authLogin(){
    const token = localStorage.getItem("Token");
    
    if(token)
    {
      console.log('token exists');
      return true;
    }
    else{
      console.log('token does not exist');
      return false;
    }
  }
}
