import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveidosComponent } from './proveidos.component';

describe('ProveidosComponent', () => {
  let component: ProveidosComponent;
  let fixture: ComponentFixture<ProveidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProveidosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProveidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
