import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceFindComponent } from './place-find.component';

describe('PlaceFindComponent', () => {
  let component: PlaceFindComponent;
  let fixture: ComponentFixture<PlaceFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
