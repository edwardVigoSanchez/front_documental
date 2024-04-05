import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReposijudicialbComponent } from './list-reposijudicialb.component';

describe('ListReposijudicialbComponent', () => {
  let component: ListReposijudicialbComponent;
  let fixture: ComponentFixture<ListReposijudicialbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListReposijudicialbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListReposijudicialbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
