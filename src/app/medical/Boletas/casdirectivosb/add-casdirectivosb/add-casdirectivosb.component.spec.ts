import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCasdirectivosbComponent } from './add-casdirectivosb.component';

describe('AddCasdirectivosbComponent', () => {
  let component: AddCasdirectivosbComponent;
  let fixture: ComponentFixture<AddCasdirectivosbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCasdirectivosbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCasdirectivosbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
