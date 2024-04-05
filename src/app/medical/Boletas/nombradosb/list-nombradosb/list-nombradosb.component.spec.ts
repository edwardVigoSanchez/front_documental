import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNombradosbComponent } from './list-nombradosb.component';

describe('ListNombradosbComponent', () => {
  let component: ListNombradosbComponent;
  let fixture: ComponentFixture<ListNombradosbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListNombradosbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListNombradosbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
