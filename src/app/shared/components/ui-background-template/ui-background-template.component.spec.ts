import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBackgroundTemplateComponent } from './ui-background-template.component';

describe('UiBackgroundTemplateComponent', () => {
  let component: UiBackgroundTemplateComponent;
  let fixture: ComponentFixture<UiBackgroundTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiBackgroundTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiBackgroundTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
