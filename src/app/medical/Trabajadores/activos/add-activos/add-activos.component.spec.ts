import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivosComponent } from './add-activos.component';

describe('AddActivosComponent', () => {
  let component: AddActivosComponent;
  let fixture: ComponentFixture<AddActivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddActivosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
