import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCasindeterminadosComponent } from './list-casindeterminados.component';

describe('ListCasindeterminadosComponent', () => {
  let component: ListCasindeterminadosComponent;
  let fixture: ComponentFixture<ListCasindeterminadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCasindeterminadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCasindeterminadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
