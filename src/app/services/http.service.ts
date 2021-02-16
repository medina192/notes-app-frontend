import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const url_Base = environment.url_Base;

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
    
  }

  registerUser(payload: object){
    console.log('http service', url_Base);
    this.http.post(`${url_Base}/auth/register`, payload).toPromise()
                .then(data => {
                  let data1 = JSON.stringify(data);
                  let token = JSON.parse(data1);
                  localStorage.setItem("Token", token.token)
                })
                .catch(err => {
                  localStorage.setItem("Error",err.error.message);
                })
  }

  getUsers(){
    console.log('http service', url_Base);
    this.http.get(`${url_Base}/auth/getUsers`)
                .subscribe((data: any) => {
                  console.log('data',data)
                });
  }
}
