import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCasregularComponent } from './edit-casregular.component';

describe('EditCasregularComponent', () => {
  let component: EditCasregularComponent;
  let fixture: ComponentFixture<EditCasregularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCasregularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCasregularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
