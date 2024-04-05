import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeyservirComponent } from './add-leyservir.component';

describe('AddLeyservirComponent', () => {
  let component: AddLeyservirComponent;
  let fixture: ComponentFixture<AddLeyservirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddLeyservirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddLeyservirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
