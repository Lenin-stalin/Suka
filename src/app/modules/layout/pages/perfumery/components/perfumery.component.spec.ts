import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumeryComponent } from './perfumery.component';

describe('PerfumeryComponent', () => {
  let component: PerfumeryComponent;
  let fixture: ComponentFixture<PerfumeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfumeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfumeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
