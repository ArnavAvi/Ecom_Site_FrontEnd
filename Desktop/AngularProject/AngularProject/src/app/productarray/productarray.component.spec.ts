import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductarrayComponent } from './productarray.component';

describe('ProductarrayComponent', () => {
  let component: ProductarrayComponent;
  let fixture: ComponentFixture<ProductarrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductarrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
