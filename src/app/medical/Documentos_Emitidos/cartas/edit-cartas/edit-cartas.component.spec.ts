import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCartasComponent } from './edit-cartas.component';

describe('EditCartasComponent', () => {
  let component: EditCartasComponent;
  let fixture: ComponentFixture<EditCartasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCartasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
