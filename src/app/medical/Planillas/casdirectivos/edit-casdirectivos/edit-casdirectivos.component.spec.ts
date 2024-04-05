import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCasdirectivosComponent } from './edit-casdirectivos.component';

describe('EditCasdirectivosComponent', () => {
  let component: EditCasdirectivosComponent;
  let fixture: ComponentFixture<EditCasdirectivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCasdirectivosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCasdirectivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
