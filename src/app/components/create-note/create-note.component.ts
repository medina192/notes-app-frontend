import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { VerifyTokenService } from '../../services/verify-token.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  @Output() emitLogin = new EventEmitter <string>();

  goToNotes: boolean;

  constructor(private tokenService: VerifyTokenService) {
    this.checkToken();
   }

  ngOnInit(): void {

     //console.log('token init',token)
     //this.tokenService.authLogin();
     //this.emitLogin.emit('some Changes');
  }

  checkToken(){
    const token = localStorage.getItem('Token');

    if(token)
    {
      this.goToNotes = true;
    }
    else{
      this.goToNotes = false;
    }
  }


}
