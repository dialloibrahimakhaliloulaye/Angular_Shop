import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategSectionComponent } from './categ-section.component';

describe('CategSectionComponent', () => {
  let component: CategSectionComponent;
  let fixture: ComponentFixture<CategSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
