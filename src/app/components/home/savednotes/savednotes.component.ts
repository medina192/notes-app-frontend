import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';
import { FormBuilder, FormGroup } from '@angular/forms';

const url_Base = environment.url_Base;

@Component({
  selector: 'app-savednotes',
  templateUrl: './savednotes.component.html',
  styleUrls: ['./savednotes.component.scss']
})
export class SavednotesComponent implements OnInit, OnChanges {

  @Input() currentNote: boolean;
  @Output() noteShowed = new EventEmitter <object>();

  notesExists: boolean = false;

  note: FormGroup;

  notes: object[] = [{
    title: '',
    deadline: '',
    createNote: '',
    text: ''
  }];

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.notesExists = false;
   }

  ngOnInit(): void {

  }

  ngOnChanges(): void{
    this.getNotes();
  }

  sendNote(indexNote: number){
    this.noteShowed.emit(this.notes[indexNote]);
  }

  async getNotes(){
    const token = localStorage.getItem('Token');


    const headers = new HttpHeaders({
      'x-token': token
    });


    await this.http.get(`${url_Base}/notes/getnotes`,{
      headers
    }).toPromise()
    .then( (token: any) => {
      this.notes = token.notesFound;
    }).catch(err => {
      console.log(err);
    });

    if(this.notes.length === 0)
    {
      this.notesExists = false;
      console.log(this.notes);
      console.log('if');
    }
    else{
      this.notesExists = true;
      console.log(this.notes);
      console.log('else');
    }

  }



}
