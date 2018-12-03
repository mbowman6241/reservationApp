import { Component, OnInit } from '@angular/core';
import { TableService } from '../services/table.service';
import { Table } from '../Interfaces/interfaces';
import { FormGroup, FormControl, Validators,  } from '@angular/forms';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  public tables: Table[];
  addResForm: FormGroup;
  constructor(private tableService: TableService, private resService: ReservationService) { }

  ngOnInit() {
    this.tableService.getTables().subscribe(data => {
      this.tables = data;
    },
      err => {
        console.log('error: ', err);
      });
      this.createForm();
  }

  private createForm() {
    this.addResForm = new FormGroup({
        date: new FormControl('', [Validators.required]),
        time: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        numPeople: new FormControl('', [
          Validators.required,
          Validators.pattern(/^-?(0|[1-9]\d*)?$/),
          Validators.min(0)
        ]),
        table: new FormControl('', [Validators.required])
    });
  }

  addReservation() {
    if (this.addResForm.valid) {
      this.resService.addReservation(this.addResForm.value);
    }
    this.addResForm.reset();
  }
}
