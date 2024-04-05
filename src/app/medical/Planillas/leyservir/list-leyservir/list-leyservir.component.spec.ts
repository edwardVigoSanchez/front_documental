import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLeyservirComponent } from './list-leyservir.component';

describe('ListLeyservirComponent', () => {
  let component: ListLeyservirComponent;
  let fixture: ComponentFixture<ListLeyservirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListLeyservirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListLeyservirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
