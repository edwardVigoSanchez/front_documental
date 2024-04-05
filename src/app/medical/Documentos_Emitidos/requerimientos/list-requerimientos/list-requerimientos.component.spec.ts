import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRequerimientosComponent } from './list-requerimientos.component';

describe('ListRequerimientosComponent', () => {
  let component: ListRequerimientosComponent;
  let fixture: ComponentFixture<ListRequerimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListRequerimientosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListRequerimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
