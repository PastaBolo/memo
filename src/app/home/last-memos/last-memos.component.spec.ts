import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMemosComponent } from './last-memos.component';

describe('LastMemosComponent', () => {
  let component: LastMemosComponent;
  let fixture: ComponentFixture<LastMemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastMemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastMemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
