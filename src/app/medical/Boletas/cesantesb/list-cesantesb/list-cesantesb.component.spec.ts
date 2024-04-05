import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCesantesbComponent } from './list-cesantesb.component';

describe('ListCesantesbComponent', () => {
  let component: ListCesantesbComponent;
  let fixture: ComponentFixture<ListCesantesbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCesantesbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCesantesbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
