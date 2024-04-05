import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMemorandumeComponent } from './edit-memorandume.component';

describe('EditMemorandumeComponent', () => {
  let component: EditMemorandumeComponent;
  let fixture: ComponentFixture<EditMemorandumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditMemorandumeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditMemorandumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
