import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCartasComponent } from './add-cartas.component';

describe('AddCartasComponent', () => {
  let component: AddCartasComponent;
  let fixture: ComponentFixture<AddCartasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCartasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
