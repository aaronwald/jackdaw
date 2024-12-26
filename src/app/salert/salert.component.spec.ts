import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalertComponent } from './salert.component';

describe('SalertComponent', () => {
  let component: SalertComponent;
  let fixture: ComponentFixture<SalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
