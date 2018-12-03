import { Injectable } from '@angular/core';
import { Reservation } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() { }

  addReservation(form: Reservation) {
    const retreivedStorage = JSON.parse(localStorage.getItem('Reservations'));
    if (retreivedStorage) {
      retreivedStorage.push(form);
      localStorage.setItem('Reservations', JSON.stringify(retreivedStorage));
    } else {
      localStorage.setItem('Reservations', JSON.stringify([form]));
    }
  }

  viewReservations() {
    return JSON.parse(localStorage.getItem('Reservations'));
  }

  viewFilledReservations() {
    return JSON.parse(localStorage.getItem('fullfill'));
  }

  filledReservation(res: Reservation) {
    const retreivedStorage = JSON.parse(localStorage.getItem('fullfill'));
    if (retreivedStorage) {
      retreivedStorage.push(res);
      localStorage.setItem('fullfill', JSON.stringify(retreivedStorage));
    } else {
      localStorage.setItem('fullfill', JSON.stringify([res]));
    }
  }

  deleteReservation(res: Reservation) {
    localStorage.setItem('Reservations', JSON.stringify(res));
  }


}
