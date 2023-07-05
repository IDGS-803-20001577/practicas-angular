import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinepolisCComponent } from './cinepolis-c.component';

describe('CinepolisCComponent', () => {
  let component: CinepolisCComponent;
  let fixture: ComponentFixture<CinepolisCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CinepolisCComponent]
    });
    fixture = TestBed.createComponent(CinepolisCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
