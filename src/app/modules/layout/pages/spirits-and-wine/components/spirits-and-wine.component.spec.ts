import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiritsAndWineComponent } from './spirits-and-wine.component';

describe('SpiritsAndWineComponent', () => {
  let component: SpiritsAndWineComponent;
  let fixture: ComponentFixture<SpiritsAndWineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpiritsAndWineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiritsAndWineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
