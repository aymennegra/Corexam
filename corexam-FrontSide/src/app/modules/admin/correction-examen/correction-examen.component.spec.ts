import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionExamenComponent } from './correction-examen.component';

describe('CorrectionExamenComponent', () => {
  let component: CorrectionExamenComponent;
  let fixture: ComponentFixture<CorrectionExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectionExamenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
