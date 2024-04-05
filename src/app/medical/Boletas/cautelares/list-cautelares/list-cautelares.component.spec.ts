import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCautelaresComponent } from './list-cautelares.component';

describe('ListCautelaresComponent', () => {
  let component: ListCautelaresComponent;
  let fixture: ComponentFixture<ListCautelaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCautelaresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCautelaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
