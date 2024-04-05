import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProveidosComponent } from './edit-proveidos.component';

describe('EditProveidosComponent', () => {
  let component: EditProveidosComponent;
  let fixture: ComponentFixture<EditProveidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditProveidosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditProveidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
