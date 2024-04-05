import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCasdirectivosbComponent } from './edit-casdirectivosb.component';

describe('EditCasdirectivosbComponent', () => {
  let component: EditCasdirectivosbComponent;
  let fixture: ComponentFixture<EditCasdirectivosbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCasdirectivosbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCasdirectivosbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
