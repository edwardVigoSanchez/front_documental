import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResoalcaldiaComponent } from './resoalcaldia.component';

describe('ResoalcaldiaComponent', () => {
  let component: ResoalcaldiaComponent;
  let fixture: ComponentFixture<ResoalcaldiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResoalcaldiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResoalcaldiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
