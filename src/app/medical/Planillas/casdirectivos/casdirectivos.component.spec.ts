import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasdirectivosComponent } from './casdirectivos.component';

describe('CasdirectivosComponent', () => {
  let component: CasdirectivosComponent;
  let fixture: ComponentFixture<CasdirectivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CasdirectivosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CasdirectivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
