import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesviewComponent } from './notesview.component';

describe('NotesviewComponent', () => {
  let component: NotesviewComponent;
  let fixture: ComponentFixture<NotesviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
