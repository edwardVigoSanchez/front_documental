import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescjudicialesComponent } from './descjudiciales.component';

describe('DescjudicialesComponent', () => {
  let component: DescjudicialesComponent;
  let fixture: ComponentFixture<DescjudicialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DescjudicialesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescjudicialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
