import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavednotesComponent } from './savednotes.component';

describe('SavednotesComponent', () => {
  let component: SavednotesComponent;
  let fixture: ComponentFixture<SavednotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavednotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavednotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
