import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordConfirmpasswordComponent } from './password-confirmpassword.component';

describe('PasswordConfirmpasswordComponent', () => {
  let component: PasswordConfirmpasswordComponent;
  let fixture: ComponentFixture<PasswordConfirmpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordConfirmpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordConfirmpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
