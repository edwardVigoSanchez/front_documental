import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCautelaresComponent } from './add-cautelares.component';

describe('AddCautelaresComponent', () => {
  let component: AddCautelaresComponent;
  let fixture: ComponentFixture<AddCautelaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCautelaresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCautelaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
