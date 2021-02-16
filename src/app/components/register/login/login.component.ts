import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { environment } from '../../../../environments/environment.prod';

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'


const url_Base = environment.url_Base;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(){
    this.loginForm = this.fb.group({
      email: ['', [ Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  async verifyLogin(){
    
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    const payload = {
      email,
      password
    };

    await this.verifyLoginBackend(payload);

  }

  verifyLoginBackend(payload: object){
    this.http.post(`${url_Base}/auth/login`,payload).toPromise()
                .then( data => {
                  let data1 = JSON.stringify(data);
                  let token = JSON.parse(data1);
                  localStorage.setItem("Token", token.token);
                  this.router.navigate(['/inicio']);
                })
                .catch( err => {
                  Swal.fire({
                    title: 'Error!',
                    text: 'El email o contraseña es incorrecto',
                    icon: 'error',
                    confirmButtonText: 'Intentar de nuevo'
                  })
                })
  }

}
