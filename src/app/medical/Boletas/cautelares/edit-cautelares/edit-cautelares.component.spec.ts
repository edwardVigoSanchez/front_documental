import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCautelaresComponent } from './edit-cautelares.component';

describe('EditCautelaresComponent', () => {
  let component: EditCautelaresComponent;
  let fixture: ComponentFixture<EditCautelaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCautelaresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCautelaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
