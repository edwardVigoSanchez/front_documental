import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasindeterminadosComponent } from './casindeterminados.component';

describe('CasindeterminadosComponent', () => {
  let component: CasindeterminadosComponent;
  let fixture: ComponentFixture<CasindeterminadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CasindeterminadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CasindeterminadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
