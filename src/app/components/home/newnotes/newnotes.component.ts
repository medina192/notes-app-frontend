import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const url_Base = environment.url_Base;

@Component({
  selector: 'app-newnotes',
  templateUrl: './newnotes.component.html',
  styleUrls: ['./newnotes.component.scss']
})
export class NewnotesComponent implements OnInit {

  note: FormGroup;
  @Output() noteSaved = new EventEmitter <string>();

  constructor( private http: HttpClient, private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(){
    this.note = this.fb.group({
      title: ['', [Validators.required]], 
      deadline: ['', [ Validators.required]],
      text: ['',[Validators.required]]
    });
  }




  async saveNote(){

  
    const title = this.note.get('title').value;
    const deadline = this.note.get('deadline').value;
    const text = this.note.get('text').value;

    const token = localStorage.getItem('Token');

    const headers = new HttpHeaders({
      'x-token': token
    });



    let params = new HttpParams().append('title', title);
    params = params.append('deadline', deadline);
    params = params.append('text', text);
    params = params.append('createDate', '20 20');


    let options = { headers: headers };

    await this.http.post(`${url_Base}/notes/createnote`, params, options).toPromise()
    .then( data => {
      console.log(data)
    })
    .catch( err => {
      console.log(err);
    });

    this.noteSaved.emit('some Changes');
  }

}
