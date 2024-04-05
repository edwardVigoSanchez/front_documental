import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CautelaresComponent } from './cautelares.component';

describe('CautelaresComponent', () => {
  let component: CautelaresComponent;
  let fixture: ComponentFixture<CautelaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CautelaresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CautelaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
