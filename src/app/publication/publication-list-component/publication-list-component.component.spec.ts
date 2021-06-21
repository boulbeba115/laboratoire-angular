import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationListComponentComponent } from './publication-list-component.component';

describe('PublicationListComponentComponent', () => {
  let component: PublicationListComponentComponent;
  let fixture: ComponentFixture<PublicationListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
