import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombradosbComponent } from './nombradosb.component';

describe('NombradosbComponent', () => {
  let component: NombradosbComponent;
  let fixture: ComponentFixture<NombradosbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NombradosbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NombradosbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
