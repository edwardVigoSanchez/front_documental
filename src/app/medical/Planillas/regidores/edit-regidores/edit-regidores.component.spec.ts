import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRegidoresComponent } from './edit-regidores.component';

describe('EditRegidoresComponent', () => {
  let component: EditRegidoresComponent;
  let fixture: ComponentFixture<EditRegidoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditRegidoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditRegidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
