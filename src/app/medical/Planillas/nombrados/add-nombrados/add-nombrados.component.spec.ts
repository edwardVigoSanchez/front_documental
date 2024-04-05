import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNombradosComponent } from './add-nombrados.component';

describe('AddNombradosComponent', () => {
  let component: AddNombradosComponent;
  let fixture: ComponentFixture<AddNombradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNombradosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNombradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
