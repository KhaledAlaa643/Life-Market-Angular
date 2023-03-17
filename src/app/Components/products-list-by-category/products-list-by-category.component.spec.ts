import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListByCategoryComponent } from './products-list-by-category.component';

describe('ProductsListByCategoryComponent', () => {
  let component: ProductsListByCategoryComponent;
  let fixture: ComponentFixture<ProductsListByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsListByCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsListByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
