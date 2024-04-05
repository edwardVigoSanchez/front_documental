import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResogerencialComponent } from './resogerencial.component';

describe('ResogerencialComponent', () => {
  let component: ResogerencialComponent;
  let fixture: ComponentFixture<ResogerencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResogerencialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResogerencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
