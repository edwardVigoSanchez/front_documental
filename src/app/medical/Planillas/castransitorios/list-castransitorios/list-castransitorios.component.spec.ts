import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCastransitoriosComponent } from './list-castransitorios.component';

describe('ListCastransitoriosComponent', () => {
  let component: ListCastransitoriosComponent;
  let fixture: ComponentFixture<ListCastransitoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCastransitoriosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCastransitoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
