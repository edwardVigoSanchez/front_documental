import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExfuncionariosComponent } from './add-exfuncionarios.component';

describe('AddExfuncionariosComponent', () => {
  let component: AddExfuncionariosComponent;
  let fixture: ComponentFixture<AddExfuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddExfuncionariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddExfuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
