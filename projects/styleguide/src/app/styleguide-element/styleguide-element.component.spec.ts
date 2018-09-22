import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleguideElementComponent } from './styleguide-element.component';

describe('StyleguideElementComponent', () => {
  let component: StyleguideElementComponent;
  let fixture: ComponentFixture<StyleguideElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleguideElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleguideElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
