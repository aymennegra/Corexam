import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsForExamComponent } from './questions-for-exam.component';

describe('QuestionsForExamComponent', () => {
  let component: QuestionsForExamComponent;
  let fixture: ComponentFixture<QuestionsForExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsForExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsForExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
