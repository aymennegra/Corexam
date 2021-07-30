import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CordinatorHomeComponent } from './cordinator-home.component';

describe('CordinatorHomeComponent', () => {
  let component: CordinatorHomeComponent;
  let fixture: ComponentFixture<CordinatorHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CordinatorHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CordinatorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
