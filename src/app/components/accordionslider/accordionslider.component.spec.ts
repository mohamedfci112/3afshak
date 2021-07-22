import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionsliderComponent } from './accordionslider.component';

describe('AccordionsliderComponent', () => {
  let component: AccordionsliderComponent;
  let fixture: ComponentFixture<AccordionsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionsliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
