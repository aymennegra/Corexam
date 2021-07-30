import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopiesBoxComponent } from './copies-box.component';

describe('CopiesBoxComponent', () => {
  let component: CopiesBoxComponent;
  let fixture: ComponentFixture<CopiesBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopiesBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopiesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
