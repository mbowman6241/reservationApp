import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReservationComponent } from './view-reservation.component';
import { MatCardModule, MatFormFieldModule, MatSortModule, MatTableModule } from '@angular/material';

describe('ViewReservationComponent', () => {
  let component: ViewReservationComponent;
  let fixture: ComponentFixture<ViewReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatFormFieldModule,
        MatSortModule,
        MatTableModule
      ],
      declarations: [ ViewReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
