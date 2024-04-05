import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPensionistasComponent } from './edit-pensionistas.component';

describe('EditPensionistasComponent', () => {
  let component: EditPensionistasComponent;
  let fixture: ComponentFixture<EditPensionistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPensionistasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPensionistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
