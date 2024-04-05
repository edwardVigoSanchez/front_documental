import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCasindeterminadosComponent } from './add-casindeterminados.component';

describe('AddCasindeterminadosComponent', () => {
  let component: AddCasindeterminadosComponent;
  let fixture: ComponentFixture<AddCasindeterminadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCasindeterminadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCasindeterminadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
