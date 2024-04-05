import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExfuncionariosComponent } from './list-exfuncionarios.component';

describe('ListExfuncionariosComponent', () => {
  let component: ListExfuncionariosComponent;
  let fixture: ComponentFixture<ListExfuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListExfuncionariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListExfuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
