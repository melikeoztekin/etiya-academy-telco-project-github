import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundTempComponent } from './background-temp.component';

describe('BackgroundTempComponent', () => {
  let component: BackgroundTempComponent;
  let fixture: ComponentFixture<BackgroundTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundTempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
