import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovefooditemComponent } from './removefooditem.component';

describe('RemovefooditemComponent', () => {
  let component: RemovefooditemComponent;
  let fixture: ComponentFixture<RemovefooditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovefooditemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovefooditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
