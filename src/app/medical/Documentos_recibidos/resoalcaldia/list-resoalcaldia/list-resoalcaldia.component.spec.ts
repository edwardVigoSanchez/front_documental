import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResoalcaldiaComponent } from './list-resoalcaldia.component';

describe('ListResoalcaldiaComponent', () => {
  let component: ListResoalcaldiaComponent;
  let fixture: ComponentFixture<ListResoalcaldiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListResoalcaldiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListResoalcaldiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
