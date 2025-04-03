import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMapComponent } from './profile-map.component';

describe('ProfileMapComponent', () => {
  let component: ProfileMapComponent;
  let fixture: ComponentFixture<ProfileMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
