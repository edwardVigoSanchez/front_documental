import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPermanentesbComponent } from './edit-permanentesb.component';

describe('EditPermanentesbComponent', () => {
  let component: EditPermanentesbComponent;
  let fixture: ComponentFixture<EditPermanentesbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPermanentesbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPermanentesbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
