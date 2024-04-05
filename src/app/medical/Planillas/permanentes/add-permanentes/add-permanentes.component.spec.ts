import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPermanentesComponent } from './add-permanentes.component';

describe('AddPermanentesComponent', () => {
  let component: AddPermanentesComponent;
  let fixture: ComponentFixture<AddPermanentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPermanentesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPermanentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
