import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResoalcaldiaComponent } from './edit-resoalcaldia.component';

describe('EditResoalcaldiaComponent', () => {
  let component: EditResoalcaldiaComponent;
  let fixture: ComponentFixture<EditResoalcaldiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditResoalcaldiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditResoalcaldiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
