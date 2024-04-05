import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionistasComponent } from './pensionistas.component';

describe('PensionistasComponent', () => {
  let component: PensionistasComponent;
  let fixture: ComponentFixture<PensionistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PensionistasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PensionistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
