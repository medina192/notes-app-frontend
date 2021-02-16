import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {


  newList: boolean = false;
 
  currentNote: object = null;
  showCurrentNote: boolean = false;


  constructor() { 
    
  }

  ngOnInit(): void {
  }

  goToNewNote(){
    this.newList = !this.newList;
    this.showCurrentNote = false;
  }

  updateListNotes(event: boolean){
    this.newList = !this.newList;
  }

  receiveNote(noteSelected: object){
    this.currentNote = noteSelected;
    this.showCurrentNote = true;
  }
}
