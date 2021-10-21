import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularConceptComponent } from './angular-concept.component';

describe('AngularConceptComponent', () => {
  let component: AngularConceptComponent;
  let fixture: ComponentFixture<AngularConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularConceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
