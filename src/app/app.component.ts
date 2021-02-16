import { Component } from '@angular/core';
import { VerifyTokenService } from './services/verify-token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'notesapp';
  navbarHeight: number = 70;
  tokenExists: boolean;

  constructor(private tokenService: VerifyTokenService){
    this.tokenExists = tokenService.userLogin;
    console.log('token app', this.tokenExists);
  }


}
