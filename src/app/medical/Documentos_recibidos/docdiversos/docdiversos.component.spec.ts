import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocdiversosComponent } from './docdiversos.component';

describe('DocdiversosComponent', () => {
  let component: DocdiversosComponent;
  let fixture: ComponentFixture<DocdiversosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocdiversosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocdiversosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
