import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacklogDetailDialogComponent } from './backlog-detail-dialog.component';

describe('BacklogDetailDialogComponent', () => {
  let component: BacklogDetailDialogComponent;
  let fixture: ComponentFixture<BacklogDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacklogDetailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacklogDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
