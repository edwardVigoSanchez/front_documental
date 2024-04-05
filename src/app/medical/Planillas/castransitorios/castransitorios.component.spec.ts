import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastransitoriosComponent } from './castransitorios.component';

describe('CastransitoriosComponent', () => {
  let component: CastransitoriosComponent;
  let fixture: ComponentFixture<CastransitoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CastransitoriosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CastransitoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
