import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOutilComponent } from './edit-outil.component';

describe('EditOutilComponent', () => {
  let component: EditOutilComponent;
  let fixture: ComponentFixture<EditOutilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOutilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOutilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
