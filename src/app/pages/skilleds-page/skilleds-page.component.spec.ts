import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilledsPageComponent } from './skilleds-page.component';

describe('SkilledsPageComponent', () => {
  let component: SkilledsPageComponent;
  let fixture: ComponentFixture<SkilledsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkilledsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilledsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
