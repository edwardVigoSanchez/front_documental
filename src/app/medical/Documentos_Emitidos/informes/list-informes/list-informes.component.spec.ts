import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInformesComponent } from './list-informes.component';

describe('ListInformesComponent', () => {
  let component: ListInformesComponent;
  let fixture: ComponentFixture<ListInformesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListInformesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListInformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
