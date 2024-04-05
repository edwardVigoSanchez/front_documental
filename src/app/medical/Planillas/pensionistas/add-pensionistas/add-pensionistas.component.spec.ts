import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPensionistasComponent } from './add-pensionistas.component';

describe('AddPensionistasComponent', () => {
  let component: AddPensionistasComponent;
  let fixture: ComponentFixture<AddPensionistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPensionistasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPensionistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
