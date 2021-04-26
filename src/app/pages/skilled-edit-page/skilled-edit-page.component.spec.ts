import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilledEditPageComponent } from './skilled-edit-page.component';

describe('SkilledEditPageComponent', () => {
  let component: SkilledEditPageComponent;
  let fixture: ComponentFixture<SkilledEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkilledEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilledEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
