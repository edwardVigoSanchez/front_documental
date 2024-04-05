import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCastransitoriosComponent } from './add-castransitorios.component';

describe('AddCastransitoriosComponent', () => {
  let component: AddCastransitoriosComponent;
  let fixture: ComponentFixture<AddCastransitoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCastransitoriosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCastransitoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
