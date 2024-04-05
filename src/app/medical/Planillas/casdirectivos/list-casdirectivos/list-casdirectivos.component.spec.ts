import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCasdirectivosComponent } from './list-casdirectivos.component';

describe('ListCasdirectivosComponent', () => {
  let component: ListCasdirectivosComponent;
  let fixture: ComponentFixture<ListCasdirectivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCasdirectivosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCasdirectivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
