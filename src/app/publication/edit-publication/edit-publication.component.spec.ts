import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPublicationComponent } from './edit-publication.component';

describe('EditPublicationComponent', () => {
  let component: EditPublicationComponent;
  let fixture: ComponentFixture<EditPublicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPublicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
