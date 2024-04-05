import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPracticantesComponent } from './list-practicantes.component';

describe('ListPracticantesComponent', () => {
  let component: ListPracticantesComponent;
  let fixture: ComponentFixture<ListPracticantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPracticantesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListPracticantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
