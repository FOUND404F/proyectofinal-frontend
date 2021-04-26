import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilledsCreatePageComponent } from './skilleds-create-page.component';

describe('SkilledsCreatePageComponent', () => {
  let component: SkilledsCreatePageComponent;
  let fixture: ComponentFixture<SkilledsCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkilledsCreatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilledsCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
