import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCasregularComponent } from './list-casregular.component';

describe('ListCasregularComponent', () => {
  let component: ListCasregularComponent;
  let fixture: ComponentFixture<ListCasregularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCasregularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCasregularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
