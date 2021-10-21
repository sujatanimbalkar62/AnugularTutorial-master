import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRxjsComponent } from './angular-rxjs.component';

describe('AngularRxjsComponent', () => {
  let component: AngularRxjsComponent;
  let fixture: ComponentFixture<AngularRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularRxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
