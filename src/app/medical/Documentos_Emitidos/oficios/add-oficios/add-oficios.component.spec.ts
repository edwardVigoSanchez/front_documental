import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOficiosComponent } from './add-oficios.component';

describe('AddOficiosComponent', () => {
  let component: AddOficiosComponent;
  let fixture: ComponentFixture<AddOficiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddOficiosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddOficiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
