import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConfiguration } from './order-configuration';

describe('OrderConfiguration', () => {
  let component: OrderConfiguration;
  let fixture: ComponentFixture<OrderConfiguration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderConfiguration],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderConfiguration);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
