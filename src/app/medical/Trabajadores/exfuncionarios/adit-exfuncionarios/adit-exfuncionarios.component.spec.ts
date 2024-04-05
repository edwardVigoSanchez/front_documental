import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AditExfuncionariosComponent } from './adit-exfuncionarios.component';

describe('AditExfuncionariosComponent', () => {
  let component: AditExfuncionariosComponent;
  let fixture: ComponentFixture<AditExfuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AditExfuncionariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AditExfuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
