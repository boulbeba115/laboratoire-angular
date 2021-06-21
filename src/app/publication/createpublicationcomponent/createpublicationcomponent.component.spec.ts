import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepublicationcomponentComponent } from './createpublicationcomponent.component';

describe('CreatepublicationcomponentComponent', () => {
  let component: CreatepublicationcomponentComponent;
  let fixture: ComponentFixture<CreatepublicationcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatepublicationcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepublicationcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
