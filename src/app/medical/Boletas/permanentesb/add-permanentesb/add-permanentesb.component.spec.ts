import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPermanentesbComponent } from './add-permanentesb.component';

describe('AddPermanentesbComponent', () => {
  let component: AddPermanentesbComponent;
  let fixture: ComponentFixture<AddPermanentesbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPermanentesbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPermanentesbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
