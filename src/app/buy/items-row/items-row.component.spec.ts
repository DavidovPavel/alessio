import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsRowComponent } from './items-row.component';

describe('ItemsRowComponent', () => {
  let component: ItemsRowComponent;
  let fixture: ComponentFixture<ItemsRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
