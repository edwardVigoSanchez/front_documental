import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExfuncionariosComponent } from './exfuncionarios.component';

describe('ExfuncionariosComponent', () => {
  let component: ExfuncionariosComponent;
  let fixture: ComponentFixture<ExfuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExfuncionariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExfuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
