import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AditActivosComponent } from './adit-activos.component';

describe('AditActivosComponent', () => {
  let component: AditActivosComponent;
  let fixture: ComponentFixture<AditActivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AditActivosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AditActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
