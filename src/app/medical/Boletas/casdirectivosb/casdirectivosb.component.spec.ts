import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasdirectivosbComponent } from './casdirectivosb.component';

describe('CasdirectivosbComponent', () => {
  let component: CasdirectivosbComponent;
  let fixture: ComponentFixture<CasdirectivosbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CasdirectivosbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CasdirectivosbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
