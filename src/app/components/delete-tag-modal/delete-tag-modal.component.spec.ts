import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTagModalComponent } from './delete-tag-modal.component';

describe('DeleteTagModalComponent', () => {
  let component: DeleteTagModalComponent;
  let fixture: ComponentFixture<DeleteTagModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTagModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTagModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
