import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPensionistasComponent } from './list-pensionistas.component';

describe('ListPensionistasComponent', () => {
  let component: ListPensionistasComponent;
  let fixture: ComponentFixture<ListPensionistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPensionistasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListPensionistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
