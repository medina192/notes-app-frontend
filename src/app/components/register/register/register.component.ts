import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { environment } from '../../../../environments/environment.prod';

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'


const url_Base = environment.url_Base;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;
  displayNotRegister: boolean = false;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router ) {
    this.createForm();
   }

  ngOnInit(): void {

  }

  createForm(){
    this.forma = this.fb.group({
      nameUser: ['', [Validators.required, Validators.minLength(5)]], 
      email: ['', [Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"), Validators.required  ]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      terms: [false, Validators.pattern('true')]
    });
  }





  async saveRegister(){

    let nameUser = '', email = '', password = '';

    console.log('asd',this.forma.get('terms').value)
    
    let saltRegister = true;

    if(this.forma.get('nameUser').valid)
    {
      nameUser = this.forma.get('nameUser').value;
    }else{
      saltRegister = false;
    }

    if(this.forma.get('email').valid)
    {
      email = this.forma.get('email').value;
    }else{
      saltRegister = false;
    }

    if(this.forma.get('password').valid)
    {
      password = this.forma.get('password').value;
    }else{
      saltRegister = false;
    }

    const payload = {
      name: nameUser,
      email,
      password
    }


    await this.responseRegister(saltRegister, payload);
    
    //const token = localStorage.getItem("Token");
    

    this.forma.reset({
      nameUser,
      email,
      password,
      terms: false
    });
  }

  resetForm(): void{
    this.forma.setValue({
      nameUser: '', 
      email: '',
      password: ''
    });
  }



  responseRegister = async(saltRegister, payload) => {

    if(saltRegister && this.forma.get('terms').value){
     //await this.httpService.registerUser(payload);
     this.http.post(`${url_Base}/auth/register`, payload).toPromise()
                 .then(data => {
                   let data1 = JSON.stringify(data);
                   let token = JSON.parse(data1);
                   localStorage.setItem("Token", token.token);
                   this.router.navigate(['/inicio']);
                 })
                 .catch(err => {
                    Swal.fire({
                      title: 'Error!',
                      text: 'El email ya existe¡',
                      icon: 'error',
                      confirmButtonText: 'continuar'
                    })
                 })
    }
    else{
      this.displayNotRegister = true;
    }
  }

  get invalidName(): boolean{
    return this.forma.get('nameUser').invalid && this.forma.get('nameUser').touched;
  }

  get invalidEmail(): boolean{
    return this.forma.get('email').invalid && this.forma.get('email').touched;
  }

  get invalidPassword(): boolean{
    return this.forma.get('password').invalid && this.forma.get('password').touched;
  }

}
