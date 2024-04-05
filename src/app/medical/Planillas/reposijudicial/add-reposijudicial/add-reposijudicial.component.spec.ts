import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReposijudicialComponent } from './add-reposijudicial.component';

describe('AddReposijudicialComponent', () => {
  let component: AddReposijudicialComponent;
  let fixture: ComponentFixture<AddReposijudicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddReposijudicialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddReposijudicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
