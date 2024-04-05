import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCesanteComponent } from './edit-cesante.component';

describe('EditCesanteComponent', () => {
  let component: EditCesanteComponent;
  let fixture: ComponentFixture<EditCesanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCesanteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCesanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
