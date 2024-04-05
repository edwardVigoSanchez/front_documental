import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombradosComponent } from './nombrados.component';

describe('NombradosComponent', () => {
  let component: NombradosComponent;
  let fixture: ComponentFixture<NombradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NombradosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NombradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
