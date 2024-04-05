import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRequerimientosComponent } from './edit-requerimientos.component';

describe('EditRequerimientosComponent', () => {
  let component: EditRequerimientosComponent;
  let fixture: ComponentFixture<EditRequerimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditRequerimientosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditRequerimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
