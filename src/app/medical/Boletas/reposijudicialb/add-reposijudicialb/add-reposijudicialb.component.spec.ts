import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReposijudicialbComponent } from './add-reposijudicialb.component';

describe('AddReposijudicialbComponent', () => {
  let component: AddReposijudicialbComponent;
  let fixture: ComponentFixture<AddReposijudicialbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddReposijudicialbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddReposijudicialbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
