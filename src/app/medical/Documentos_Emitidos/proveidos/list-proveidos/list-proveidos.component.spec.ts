import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProveidosComponent } from './list-proveidos.component';

describe('ListProveidosComponent', () => {
  let component: ListProveidosComponent;
  let fixture: ComponentFixture<ListProveidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListProveidosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListProveidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
