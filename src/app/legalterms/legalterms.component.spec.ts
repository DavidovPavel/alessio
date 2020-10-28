import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegaltermsComponent } from './legalterms.component';

describe('LegaltermsComponent', () => {
  let component: LegaltermsComponent;
  let fixture: ComponentFixture<LegaltermsComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [LegaltermsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegaltermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
