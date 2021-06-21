import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEventComponentComponent } from './edit-event-component.component';

describe('EditEventComponentComponent', () => {
  let component: EditEventComponentComponent;
  let fixture: ComponentFixture<EditEventComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEventComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEventComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
