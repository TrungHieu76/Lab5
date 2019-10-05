import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KiemloiComponent } from './kiemloi.component';

describe('KiemloiComponent', () => {
  let component: KiemloiComponent;
  let fixture: ComponentFixture<KiemloiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KiemloiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KiemloiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
