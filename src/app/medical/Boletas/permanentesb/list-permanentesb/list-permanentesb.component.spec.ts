import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPermanentesbComponent } from './list-permanentesb.component';

describe('ListPermanentesbComponent', () => {
  let component: ListPermanentesbComponent;
  let fixture: ComponentFixture<ListPermanentesbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPermanentesbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListPermanentesbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
