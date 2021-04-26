import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsCreatePageComponent } from './tags-create-page.component';

describe('TagsCreatePageComponent', () => {
  let component: TagsCreatePageComponent;
  let fixture: ComponentFixture<TagsCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagsCreatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
