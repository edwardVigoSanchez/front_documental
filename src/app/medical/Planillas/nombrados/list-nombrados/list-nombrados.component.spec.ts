import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNombradosComponent } from './list-nombrados.component';

describe('ListNombradosComponent', () => {
  let component: ListNombradosComponent;
  let fixture: ComponentFixture<ListNombradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListNombradosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListNombradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
