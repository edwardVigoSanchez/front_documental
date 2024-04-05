import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCasindeterminadosComponent } from './edit-casindeterminados.component';

describe('EditCasindeterminadosComponent', () => {
  let component: EditCasindeterminadosComponent;
  let fixture: ComponentFixture<EditCasindeterminadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCasindeterminadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCasindeterminadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
