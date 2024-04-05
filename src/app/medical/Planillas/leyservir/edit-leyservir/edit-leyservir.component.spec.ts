import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLeyservirComponent } from './edit-leyservir.component';

describe('EditLeyservirComponent', () => {
  let component: EditLeyservirComponent;
  let fixture: ComponentFixture<EditLeyservirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditLeyservirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditLeyservirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
