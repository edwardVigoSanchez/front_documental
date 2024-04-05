import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResoalcaldiaComponent } from './add-resoalcaldia.component';

describe('AddResoalcaldiaComponent', () => {
  let component: AddResoalcaldiaComponent;
  let fixture: ComponentFixture<AddResoalcaldiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddResoalcaldiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddResoalcaldiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
