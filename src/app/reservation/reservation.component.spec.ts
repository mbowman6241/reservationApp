import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationComponent } from './reservation.component';
import { MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatNativeDateModule,
  MatFormFieldControl,
  MatInputModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ReservationComponent', () => {
  let component: ReservationComponent;
  let fixture: ComponentFixture<ReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        HttpClientModule,
        MatNativeDateModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [ ReservationComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
