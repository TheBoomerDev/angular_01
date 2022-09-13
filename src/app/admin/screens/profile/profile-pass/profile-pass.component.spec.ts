import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePassComponent } from './profile-pass.component';

describe('ProfilePassComponent', () => {
  let component: ProfilePassComponent;
  let fixture: ComponentFixture<ProfilePassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
