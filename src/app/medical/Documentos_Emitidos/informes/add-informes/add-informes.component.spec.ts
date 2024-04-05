import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInformesComponent } from './add-informes.component';

describe('AddInformesComponent', () => {
  let component: AddInformesComponent;
  let fixture: ComponentFixture<AddInformesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddInformesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddInformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
