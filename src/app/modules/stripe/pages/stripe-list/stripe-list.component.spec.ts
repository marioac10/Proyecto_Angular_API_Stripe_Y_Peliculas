import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeListComponent } from './stripe-list.component';

describe('StripeListComponent', () => {
  let component: StripeListComponent;
  let fixture: ComponentFixture<StripeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StripeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
