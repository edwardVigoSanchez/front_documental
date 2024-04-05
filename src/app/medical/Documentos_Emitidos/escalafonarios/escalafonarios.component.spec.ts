import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalafonariosComponent } from './escalafonarios.component';

describe('EscalafonariosComponent', () => {
  let component: EscalafonariosComponent;
  let fixture: ComponentFixture<EscalafonariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EscalafonariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscalafonariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
