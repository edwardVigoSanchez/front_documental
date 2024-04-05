import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCasregularComponent } from './add-casregular.component';

describe('AddCasregularComponent', () => {
  let component: AddCasregularComponent;
  let fixture: ComponentFixture<AddCasregularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCasregularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCasregularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
