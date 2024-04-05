import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEscalafonariosComponent } from './edit-escalafonarios.component';

describe('EditEscalafonariosComponent', () => {
  let component: EditEscalafonariosComponent;
  let fixture: ComponentFixture<EditEscalafonariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditEscalafonariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditEscalafonariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
