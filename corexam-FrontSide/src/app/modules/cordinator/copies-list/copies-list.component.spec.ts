import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopiesListComponent } from './copies-list.component';

describe('CopiesListComponent', () => {
  let component: CopiesListComponent;
  let fixture: ComponentFixture<CopiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopiesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
