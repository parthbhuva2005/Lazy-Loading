import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item3Component } from './item3.component';

describe('Item3Component', () => {
  let component: Item3Component;
  let fixture: ComponentFixture<Item3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Item3Component]
    });
    fixture = TestBed.createComponent(Item3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
