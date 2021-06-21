import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventComponentComponent } from './create-event-component.component';

describe('CreateEventComponentComponent', () => {
  let component: CreateEventComponentComponent;
  let fixture: ComponentFixture<CreateEventComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEventComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
