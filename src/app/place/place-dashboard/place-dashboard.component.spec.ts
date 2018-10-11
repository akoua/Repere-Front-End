
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceDashboardComponent } from './place-dashboard.component';

describe('PlaceDashboardComponent', () => {
  let component: PlaceDashboardComponent;
  let fixture: ComponentFixture<PlaceDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
