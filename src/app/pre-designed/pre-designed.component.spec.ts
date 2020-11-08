import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreDesignedComponent } from './pre-designed.component';

describe('PreDesignedComponent', () => {
  let component: PreDesignedComponent;
  let fixture: ComponentFixture<PreDesignedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreDesignedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreDesignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
