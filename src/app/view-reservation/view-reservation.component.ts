import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Reservation } from '../Interfaces/interfaces';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-view-reservation',
  templateUrl: './view-reservation.component.html',
  styleUrls: ['./view-reservation.component.css'],
})
export class ViewReservationComponent implements OnInit {
  @ViewChild('sort') sort: MatSort;
  @ViewChild('sortFill') sortFill: MatSort;
  reservations: any;
  filledResy: any;
  dataSource = new MatTableDataSource<Reservation>(this.reservations);
  displayedColumns: string[] = ['date', 'name', 'time', 'numPeople', 'table', 'action'];
  filledResDataSource = new MatTableDataSource<Reservation>(this.filledResy);
  filledColumns: string[] = ['date', 'name', 'time', 'numPeople'];

  constructor(private resService: ReservationService) { }

  ngOnInit() {
    this.reservations = this.resService.viewReservations();
    if (this.reservations === null) {
      this.reservations = [];
    }
    this.dataSource.data = this.reservations;
    this.dataSource.sort = this.sort;

    this.filledResy = this.resService.viewFilledReservations();
    if (this.filledResy === null) {
      this.filledResy = [];
    }
    this.filledResDataSource.data = this.filledResy;
    this.filledResDataSource.sort = this.sortFill;
  }

  deleteReservation(res: any) {
    for (let i = 0; i < this.reservations.length; i++) {
      if ((this.reservations[i].name === res.name) && (this.reservations[i].date === res.date)) {
        this.reservations.splice(i, 1);
      }
    }
    this.resService.deleteReservation(this.reservations);
    this.dataSource.data = this.reservations;
  }

  filledReservation(res: any) {
    for (let i = 0; i < this.reservations.length; i++) {
      if ((this.reservations[i].name === res.name) && (this.reservations[i].date === res.date)) {
        this.reservations.splice(i, 1);
      }
    }
    this.dataSource.data = this.reservations;
    this.resService.deleteReservation(this.reservations);
    this.resService.filledReservation(res);
    this.filledResy = this.resService.viewFilledReservations();
    this.filledResDataSource.data = this.filledResy;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
