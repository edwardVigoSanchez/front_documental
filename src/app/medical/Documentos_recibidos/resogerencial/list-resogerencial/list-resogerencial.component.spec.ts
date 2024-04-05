import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResogerencialComponent } from './list-resogerencial.component';

describe('ListResogerencialComponent', () => {
  let component: ListResogerencialComponent;
  let fixture: ComponentFixture<ListResogerencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListResogerencialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListResogerencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
