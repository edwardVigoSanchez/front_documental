import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDescjudicialesComponent } from './list-descjudiciales.component';

describe('ListDescjudicialesComponent', () => {
  let component: ListDescjudicialesComponent;
  let fixture: ComponentFixture<ListDescjudicialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListDescjudicialesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListDescjudicialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
