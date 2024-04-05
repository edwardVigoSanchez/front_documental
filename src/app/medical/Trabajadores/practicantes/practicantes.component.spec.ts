import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticantesComponent } from './practicantes.component';

describe('PracticantesComponent', () => {
  let component: PracticantesComponent;
  let fixture: ComponentFixture<PracticantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PracticantesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
