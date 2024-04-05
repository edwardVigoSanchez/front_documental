import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCesanteComponent } from './list-cesante.component';

describe('ListCesanteComponent', () => {
  let component: ListCesanteComponent;
  let fixture: ComponentFixture<ListCesanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCesanteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCesanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
