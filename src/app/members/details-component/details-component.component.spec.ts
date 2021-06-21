import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponentComponent } from './details-component.component';

describe('DetailsComponentComponent', () => {
  let component: DetailsComponentComponent;
  let fixture: ComponentFixture<DetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
