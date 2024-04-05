import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCasdirectivosbComponent } from './list-casdirectivosb.component';

describe('ListCasdirectivosbComponent', () => {
  let component: ListCasdirectivosbComponent;
  let fixture: ComponentFixture<ListCasdirectivosbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCasdirectivosbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCasdirectivosbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
