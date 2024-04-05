import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AditFuncionariosComponent } from './adit-funcionarios.component';

describe('AditFuncionariosComponent', () => {
  let component: AditFuncionariosComponent;
  let fixture: ComponentFixture<AditFuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AditFuncionariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AditFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
