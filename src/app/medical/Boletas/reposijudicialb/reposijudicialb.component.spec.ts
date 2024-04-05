import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposijudicialbComponent } from './reposijudicialb.component';

describe('ReposijudicialbComponent', () => {
  let component: ReposijudicialbComponent;
  let fixture: ComponentFixture<ReposijudicialbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReposijudicialbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReposijudicialbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
