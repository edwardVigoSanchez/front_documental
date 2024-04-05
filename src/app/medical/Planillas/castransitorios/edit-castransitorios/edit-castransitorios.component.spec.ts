import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCastransitoriosComponent } from './edit-castransitorios.component';

describe('EditCastransitoriosComponent', () => {
  let component: EditCastransitoriosComponent;
  let fixture: ComponentFixture<EditCastransitoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCastransitoriosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCastransitoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
