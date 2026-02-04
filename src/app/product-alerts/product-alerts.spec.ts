import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAlerts } from './product-alerts';

describe('ProductAlerts', () => {
  let component: ProductAlerts;
  let fixture: ComponentFixture<ProductAlerts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductAlerts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAlerts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
