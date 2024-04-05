import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDescjudicialesComponent } from './edit-descjudiciales.component';

describe('EditDescjudicialesComponent', () => {
  let component: EditDescjudicialesComponent;
  let fixture: ComponentFixture<EditDescjudicialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDescjudicialesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDescjudicialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
