import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProveidosComponent } from './add-proveidos.component';

describe('AddProveidosComponent', () => {
  let component: AddProveidosComponent;
  let fixture: ComponentFixture<AddProveidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProveidosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddProveidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
