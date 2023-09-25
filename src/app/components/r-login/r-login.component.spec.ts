import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RLoginComponent } from './r-login.component';

describe('RLoginComponent', () => {
  let component: RLoginComponent;
  let fixture: ComponentFixture<RLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
