import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRegidoresComponent } from './add-regidores.component';

describe('AddRegidoresComponent', () => {
  let component: AddRegidoresComponent;
  let fixture: ComponentFixture<AddRegidoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddRegidoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRegidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
