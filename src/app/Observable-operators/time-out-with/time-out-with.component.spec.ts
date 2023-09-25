import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeOutWithComponent } from './time-out-with.component';

describe('TimeOutWithComponent', () => {
  let component: TimeOutWithComponent;
  let fixture: ComponentFixture<TimeOutWithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeOutWithComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeOutWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
