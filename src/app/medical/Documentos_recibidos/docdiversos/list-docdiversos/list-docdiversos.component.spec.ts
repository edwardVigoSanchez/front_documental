import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDocdiversosComponent } from './list-docdiversos.component';

describe('ListDocdiversosComponent', () => {
  let component: ListDocdiversosComponent;
  let fixture: ComponentFixture<ListDocdiversosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListDocdiversosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListDocdiversosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
