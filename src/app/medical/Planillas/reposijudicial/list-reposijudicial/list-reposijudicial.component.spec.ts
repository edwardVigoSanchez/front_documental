import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReposijudicialComponent } from './list-reposijudicial.component';

describe('ListReposijudicialComponent', () => {
  let component: ListReposijudicialComponent;
  let fixture: ComponentFixture<ListReposijudicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListReposijudicialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListReposijudicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
