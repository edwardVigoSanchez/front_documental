import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentesbComponent } from './permanentesb.component';

describe('PermanentesbComponent', () => {
  let component: PermanentesbComponent;
  let fixture: ComponentFixture<PermanentesbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PermanentesbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermanentesbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
