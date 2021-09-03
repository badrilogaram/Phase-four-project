import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfooditemsComponent } from './listfooditems.component';

describe('ListfooditemsComponent', () => {
  let component: ListfooditemsComponent;
  let fixture: ComponentFixture<ListfooditemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListfooditemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListfooditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
