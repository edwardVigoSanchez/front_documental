import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInformesComponent } from './edit-informes.component';

describe('EditInformesComponent', () => {
  let component: EditInformesComponent;
  let fixture: ComponentFixture<EditInformesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditInformesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditInformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
