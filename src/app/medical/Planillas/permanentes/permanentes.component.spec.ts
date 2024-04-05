import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentesComponent } from './permanentes.component';

describe('PermanentesComponent', () => {
  let component: PermanentesComponent;
  let fixture: ComponentFixture<PermanentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PermanentesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermanentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
