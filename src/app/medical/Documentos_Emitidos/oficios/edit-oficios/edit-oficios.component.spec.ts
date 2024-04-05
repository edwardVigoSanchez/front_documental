import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOficiosComponent } from './edit-oficios.component';

describe('EditOficiosComponent', () => {
  let component: EditOficiosComponent;
  let fixture: ComponentFixture<EditOficiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditOficiosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditOficiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
