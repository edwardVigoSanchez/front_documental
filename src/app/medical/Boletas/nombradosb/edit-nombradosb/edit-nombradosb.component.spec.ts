import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNombradosbComponent } from './edit-nombradosb.component';

describe('EditNombradosbComponent', () => {
  let component: EditNombradosbComponent;
  let fixture: ComponentFixture<EditNombradosbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditNombradosbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditNombradosbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
