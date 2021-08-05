import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedListComponent } from './applied-list.component';

describe('AppliedListComponent', () => {
  let component: AppliedListComponent;
  let fixture: ComponentFixture<AppliedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppliedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
