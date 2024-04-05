import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDocdiversosComponent } from './edit-docdiversos.component';

describe('EditDocdiversosComponent', () => {
  let component: EditDocdiversosComponent;
  let fixture: ComponentFixture<EditDocdiversosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDocdiversosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDocdiversosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
