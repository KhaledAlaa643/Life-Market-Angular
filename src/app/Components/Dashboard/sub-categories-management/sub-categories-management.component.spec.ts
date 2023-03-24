import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoriesManagementComponent } from './sub-categories-management.component';

describe('SubCategoriesManagementComponent', () => {
  let component: SubCategoriesManagementComponent;
  let fixture: ComponentFixture<SubCategoriesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCategoriesManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubCategoriesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
