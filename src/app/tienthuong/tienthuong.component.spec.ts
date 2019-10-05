import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TienthuongComponent } from './tienthuong.component';

describe('TienthuongComponent', () => {
  let component: TienthuongComponent;
  let fixture: ComponentFixture<TienthuongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TienthuongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TienthuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
