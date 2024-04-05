import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNombradosComponent } from './edit-nombrados.component';

describe('EditNombradosComponent', () => {
  let component: EditNombradosComponent;
  let fixture: ComponentFixture<EditNombradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditNombradosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditNombradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
