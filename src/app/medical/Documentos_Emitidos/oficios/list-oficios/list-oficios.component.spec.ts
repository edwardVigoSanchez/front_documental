import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOficiosComponent } from './list-oficios.component';

describe('ListOficiosComponent', () => {
  let component: ListOficiosComponent;
  let fixture: ComponentFixture<ListOficiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListOficiosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListOficiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
