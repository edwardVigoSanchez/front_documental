import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPermanentesComponent } from './list-permanentes.component';

describe('ListPermanentesComponent', () => {
  let component: ListPermanentesComponent;
  let fixture: ComponentFixture<ListPermanentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPermanentesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListPermanentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
