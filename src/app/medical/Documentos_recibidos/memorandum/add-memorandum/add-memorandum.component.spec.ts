import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMemorandumComponent } from './add-memorandum.component';

describe('AddMemorandumComponent', () => {
  let component: AddMemorandumComponent;
  let fixture: ComponentFixture<AddMemorandumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMemorandumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMemorandumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
