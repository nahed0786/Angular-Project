import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShallowDeepComponent } from './shallow-deep.component';

describe('ShallowDeepComponent', () => {
  let component: ShallowDeepComponent;
  let fixture: ComponentFixture<ShallowDeepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShallowDeepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShallowDeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
