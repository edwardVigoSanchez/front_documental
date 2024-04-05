import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRequerimientosComponent } from './add-requerimientos.component';

describe('AddRequerimientosComponent', () => {
  let component: AddRequerimientosComponent;
  let fixture: ComponentFixture<AddRequerimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddRequerimientosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRequerimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
