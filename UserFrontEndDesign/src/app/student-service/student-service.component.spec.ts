import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentServiceComponent } from './student-service.component';

describe('StudentServiceComponent', () => {
  let component: StudentServiceComponent;
  let fixture: ComponentFixture<StudentServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
