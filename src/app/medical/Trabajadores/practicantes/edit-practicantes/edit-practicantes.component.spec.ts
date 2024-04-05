import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPracticantesComponent } from './edit-practicantes.component';

describe('EditPracticantesComponent', () => {
  let component: EditPracticantesComponent;
  let fixture: ComponentFixture<EditPracticantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPracticantesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPracticantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
