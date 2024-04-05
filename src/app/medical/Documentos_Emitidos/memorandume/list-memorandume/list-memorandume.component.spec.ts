import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMemorandumeComponent } from './list-memorandume.component';

describe('ListMemorandumeComponent', () => {
  let component: ListMemorandumeComponent;
  let fixture: ComponentFixture<ListMemorandumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListMemorandumeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListMemorandumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
