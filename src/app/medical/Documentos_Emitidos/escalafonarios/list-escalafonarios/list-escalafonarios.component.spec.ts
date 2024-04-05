import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEscalafonariosComponent } from './list-escalafonarios.component';

describe('ListEscalafonariosComponent', () => {
  let component: ListEscalafonariosComponent;
  let fixture: ComponentFixture<ListEscalafonariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListEscalafonariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListEscalafonariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
