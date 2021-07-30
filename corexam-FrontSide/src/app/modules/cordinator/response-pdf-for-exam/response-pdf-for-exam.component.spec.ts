import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsePDFForExamComponent } from './response-pdf-for-exam.component';

describe('ResponsePDFForExamComponent', () => {
  let component: ResponsePDFForExamComponent;
  let fixture: ComponentFixture<ResponsePDFForExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsePDFForExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsePDFForExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
