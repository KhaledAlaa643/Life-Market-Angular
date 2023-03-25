import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryUpdateComponent } from './sub-category-update.component';

describe('SubCategoryUpdateComponent', () => {
  let component: SubCategoryUpdateComponent;
  let fixture: ComponentFixture<SubCategoryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCategoryUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubCategoryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
