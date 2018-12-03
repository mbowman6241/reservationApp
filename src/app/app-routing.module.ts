import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { ViewReservationComponent } from './view-reservation/view-reservation.component';

const routes: Routes = [
  { path: 'reservation', component: ReservationComponent, data: { title: 'Make A Reservation' } },
  { path: '', component: ViewReservationComponent, data: { title: 'View Reservation' } },
  { path: 'view', component: ViewReservationComponent, data: { title: 'ViewReservation' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
