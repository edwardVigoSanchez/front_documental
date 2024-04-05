import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRegidoresComponent } from './list-regidores.component';

describe('ListRegidoresComponent', () => {
  let component: ListRegidoresComponent;
  let fixture: ComponentFixture<ListRegidoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListRegidoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListRegidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
