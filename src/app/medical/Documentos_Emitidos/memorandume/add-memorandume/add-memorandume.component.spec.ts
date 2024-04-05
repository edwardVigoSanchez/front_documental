import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMemorandumeComponent } from './add-memorandume.component';

describe('AddMemorandumeComponent', () => {
  let component: AddMemorandumeComponent;
  let fixture: ComponentFixture<AddMemorandumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMemorandumeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMemorandumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
