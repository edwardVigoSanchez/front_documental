import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNombradosbComponent } from './add-nombradosb.component';

describe('AddNombradosbComponent', () => {
  let component: AddNombradosbComponent;
  let fixture: ComponentFixture<AddNombradosbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNombradosbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNombradosbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
