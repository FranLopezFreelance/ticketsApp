import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintDetailDialogComponent } from './sprint-detail-dialog.component';

describe('SprintDetailDialogComponent', () => {
  let component: SprintDetailDialogComponent;
  let fixture: ComponentFixture<SprintDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintDetailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
