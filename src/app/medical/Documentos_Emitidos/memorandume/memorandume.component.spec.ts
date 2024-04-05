import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorandumeComponent } from './memorandume.component';

describe('MemorandumeComponent', () => {
  let component: MemorandumeComponent;
  let fixture: ComponentFixture<MemorandumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemorandumeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemorandumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
