import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReposijudicialbComponent } from './edit-reposijudicialb.component';

describe('EditReposijudicialbComponent', () => {
  let component: EditReposijudicialbComponent;
  let fixture: ComponentFixture<EditReposijudicialbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditReposijudicialbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditReposijudicialbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
