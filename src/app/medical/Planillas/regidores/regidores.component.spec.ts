import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegidoresComponent } from './regidores.component';

describe('RegidoresComponent', () => {
  let component: RegidoresComponent;
  let fixture: ComponentFixture<RegidoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegidoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
