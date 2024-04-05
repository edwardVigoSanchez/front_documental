import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCesantesbComponent } from './add-cesantesb.component';

describe('AddCesantesbComponent', () => {
  let component: AddCesantesbComponent;
  let fixture: ComponentFixture<AddCesantesbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCesantesbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCesantesbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
