import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMemberComponentComponent } from './edit-member-component.component';

describe('EditMemberComponentComponent', () => {
  let component: EditMemberComponentComponent;
  let fixture: ComponentFixture<EditMemberComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMemberComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMemberComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
