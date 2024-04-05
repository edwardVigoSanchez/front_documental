import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMemorandumComponent } from './edit-memorandum.component';

describe('EditMemorandumComponent', () => {
  let component: EditMemorandumComponent;
  let fixture: ComponentFixture<EditMemorandumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditMemorandumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditMemorandumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
