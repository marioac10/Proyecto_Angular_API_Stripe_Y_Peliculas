import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvmazeListComponent } from './tvmaze-list.component';

describe('TvmazeListComponent', () => {
  let component: TvmazeListComponent;
  let fixture: ComponentFixture<TvmazeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvmazeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvmazeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
