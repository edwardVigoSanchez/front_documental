import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPracticantesComponent } from './add-practicantes.component';

describe('AddPracticantesComponent', () => {
  let component: AddPracticantesComponent;
  let fixture: ComponentFixture<AddPracticantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPracticantesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPracticantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
