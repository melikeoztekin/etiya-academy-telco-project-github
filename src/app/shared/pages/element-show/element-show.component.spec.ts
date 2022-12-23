import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementShowComponent } from './element-show.component';

describe('ElementShowComponent', () => {
  let component: ElementShowComponent;
  let fixture: ComponentFixture<ElementShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
