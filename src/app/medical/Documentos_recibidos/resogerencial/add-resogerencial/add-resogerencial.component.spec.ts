import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResogerencialComponent } from './add-resogerencial.component';

describe('AddResogerencialComponent', () => {
  let component: AddResogerencialComponent;
  let fixture: ComponentFixture<AddResogerencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddResogerencialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddResogerencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
