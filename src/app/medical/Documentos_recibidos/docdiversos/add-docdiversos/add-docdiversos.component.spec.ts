import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDocdiversosComponent } from './add-docdiversos.component';

describe('AddDocdiversosComponent', () => {
  let component: AddDocdiversosComponent;
  let fixture: ComponentFixture<AddDocdiversosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDocdiversosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddDocdiversosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
