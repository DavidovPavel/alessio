import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOfSectionComponent } from './one-of-section.component';

describe('OneOfSectionComponent', () => {
  let component: OneOfSectionComponent;
  let fixture: ComponentFixture<OneOfSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneOfSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneOfSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
