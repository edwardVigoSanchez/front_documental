import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCesanteComponent } from './add-cesante.component';

describe('AddCesanteComponent', () => {
  let component: AddCesanteComponent;
  let fixture: ComponentFixture<AddCesanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCesanteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCesanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
