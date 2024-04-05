import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCartasComponent } from './list-cartas.component';

describe('ListCartasComponent', () => {
  let component: ListCartasComponent;
  let fixture: ComponentFixture<ListCartasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCartasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
