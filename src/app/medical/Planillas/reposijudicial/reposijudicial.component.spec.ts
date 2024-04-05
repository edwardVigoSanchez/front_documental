import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposijudicialComponent } from './reposijudicial.component';

describe('ReposijudicialComponent', () => {
  let component: ReposijudicialComponent;
  let fixture: ComponentFixture<ReposijudicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReposijudicialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReposijudicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
