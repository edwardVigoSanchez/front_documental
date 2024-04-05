import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCesantesbComponent } from './edit-cesantesb.component';

describe('EditCesantesbComponent', () => {
  let component: EditCesantesbComponent;
  let fixture: ComponentFixture<EditCesantesbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCesantesbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCesantesbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
