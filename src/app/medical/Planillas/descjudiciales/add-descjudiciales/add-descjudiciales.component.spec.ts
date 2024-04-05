import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDescjudicialesComponent } from './add-descjudiciales.component';

describe('AddDescjudicialesComponent', () => {
  let component: AddDescjudicialesComponent;
  let fixture: ComponentFixture<AddDescjudicialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDescjudicialesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddDescjudicialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
