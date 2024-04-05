import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCasdirectivosComponent } from './add-casdirectivos.component';

describe('AddCasdirectivosComponent', () => {
  let component: AddCasdirectivosComponent;
  let fixture: ComponentFixture<AddCasdirectivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCasdirectivosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCasdirectivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
