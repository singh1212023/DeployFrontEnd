import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTeacherListComponent } from './show-teacher-list.component';

describe('ShowTeacherListComponent', () => {
  let component: ShowTeacherListComponent;
  let fixture: ComponentFixture<ShowTeacherListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowTeacherListComponent]
    });
    fixture = TestBed.createComponent(ShowTeacherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
