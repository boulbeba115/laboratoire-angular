import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOutilComponent } from './create-outil.component';

describe('CreateOutilComponent', () => {
  let component: CreateOutilComponent;
  let fixture: ComponentFixture<CreateOutilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOutilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOutilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
