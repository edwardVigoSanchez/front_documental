import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResogerencialComponent } from './edit-resogerencial.component';

describe('EditResogerencialComponent', () => {
  let component: EditResogerencialComponent;
  let fixture: ComponentFixture<EditResogerencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditResogerencialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditResogerencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
