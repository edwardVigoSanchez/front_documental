import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasregularComponent } from './casregular.component';

describe('CasregularComponent', () => {
  let component: CasregularComponent;
  let fixture: ComponentFixture<CasregularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CasregularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CasregularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
