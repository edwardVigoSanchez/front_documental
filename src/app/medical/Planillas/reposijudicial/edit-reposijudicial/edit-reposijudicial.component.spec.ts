import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReposijudicialComponent } from './edit-reposijudicial.component';

describe('EditReposijudicialComponent', () => {
  let component: EditReposijudicialComponent;
  let fixture: ComponentFixture<EditReposijudicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditReposijudicialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditReposijudicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
