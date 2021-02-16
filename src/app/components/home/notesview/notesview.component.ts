import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment.prod';

const url_Base = environment.url_Base;


@Component({
  selector: 'app-notesview',
  templateUrl: './notesview.component.html',
  styleUrls: ['./notesview.component.scss']
})
export class NotesviewComponent implements OnInit, OnChanges {

  @Input() currentNote: any;
  @Output() goToNewNote = new EventEmitter <string>();

  editActive: boolean = false;
  editNote: boolean = false;
  noteSaved: object = {
    title: 'Wait',
    deadline: 'hi',
    text: 'hi2'
  };

  editForm: FormGroup;
  emptyFieldAlert: boolean = false;
  deleteNoteMessage: boolean = false;

  constructor( private http: HttpClient, private fb: FormBuilder) {
    this.createForm();
   }

   createForm(){
     this.editForm = this.fb.group({
       title: ['',Validators.required],
       deadline: ['', Validators.required],
       text: ['', Validators.required]
     });
   }

  ngOnInit(): void {

  }

  ngOnChanges(){
    this.noteSaved = this.currentNote;
  }

  undoChanges(){
    this.editActive = false;
  }

  editIcon(){
   
    this.editForm.setValue({
      title: this.currentNote.title,
      deadline: this.currentNote.deadline,
      text: this.currentNote.text
    });

    this.editActive = true;
  }




  async deleteIcon(){

    const token = localStorage.getItem('Token');

    const headers = new HttpHeaders({
      'x-token': token
    });

    await this.http.delete(`${url_Base}/notes/deletenote/${this.currentNote._id}`, {headers}).toPromise()
    .then( (data: any) => {
      this.goToNewNote.emit('get out');
    })
    .catch( err => {
      console.log(err);
    })
      
  }

  async saveNote(){

    const title = this.editForm.get('title').value;
    const deadline = this.editForm.get('deadline').value;
    const text = this.editForm.get('text').value;

    let params = new HttpParams().append('title', title);
    params.append('deadline', deadline);
    params.append('text', text);

    const token = localStorage.getItem('Token');


    const headers = new HttpHeaders({
      'x-token': token
    });

    if(title !== '' && deadline !== '' && text !== '')
    {
      await this.http.put(`${url_Base}/notes/updatenote/${this.currentNote._id}`, params, {headers}).toPromise()
      .then( (data: any) => {
        console.log(data);
      })
      .catch( err => {
        console.log(err);
      })
      this.goToNewNote.emit('get out');
    }
    else{

      this.emptyFieldAlert = true;

      setTimeout(() => {
        this.emptyFieldAlert = false;
      }, 3000);
      
    }

  }

  deleteNote(){
    this.deleteNoteMessage = true;
  }

  confirmDelete(){
    this.deleteIcon();
    this.deleteNoteMessage = false;
  }

  noConfirmDelete(){
        this.editForm.setValue({
      title: this.currentNote.title,
      deadline: this.currentNote.deadline,
      text: this.currentNote.text
    });
    this.deleteNoteMessage = false;
  }

  adjuntImage(){
    
  }

}
