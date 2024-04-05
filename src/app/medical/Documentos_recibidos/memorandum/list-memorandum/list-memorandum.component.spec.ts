import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMemorandumComponent } from './list-memorandum.component';

describe('ListMemorandumComponent', () => {
  let component: ListMemorandumComponent;
  let fixture: ComponentFixture<ListMemorandumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListMemorandumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListMemorandumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
