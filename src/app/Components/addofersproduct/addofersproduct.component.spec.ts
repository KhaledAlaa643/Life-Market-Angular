import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddofersproductComponent } from './addofersproduct.component';

describe('AddofersproductComponent', () => {
  let component: AddofersproductComponent;
  let fixture: ComponentFixture<AddofersproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddofersproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddofersproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
