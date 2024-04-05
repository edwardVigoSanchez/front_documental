import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyservirComponent } from './leyservir.component';

describe('LeyservirComponent', () => {
  let component: LeyservirComponent;
  let fixture: ComponentFixture<LeyservirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeyservirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeyservirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
