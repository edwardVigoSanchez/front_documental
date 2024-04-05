import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CesantesbComponent } from './cesantesb.component';

describe('CesantesbComponent', () => {
  let component: CesantesbComponent;
  let fixture: ComponentFixture<CesantesbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CesantesbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CesantesbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
