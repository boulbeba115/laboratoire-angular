import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOutilComponent } from './list-outil.component';

describe('ListOutilComponent', () => {
  let component: ListOutilComponent;
  let fixture: ComponentFixture<ListOutilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOutilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOutilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
