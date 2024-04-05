import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEscalafonariosComponent } from './add-escalafonarios.component';

describe('AddEscalafonariosComponent', () => {
  let component: AddEscalafonariosComponent;
  let fixture: ComponentFixture<AddEscalafonariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEscalafonariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEscalafonariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
