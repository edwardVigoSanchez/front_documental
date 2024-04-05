import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPermanentesComponent } from './edit-permanentes.component';

describe('EditPermanentesComponent', () => {
  let component: EditPermanentesComponent;
  let fixture: ComponentFixture<EditPermanentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPermanentesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPermanentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
