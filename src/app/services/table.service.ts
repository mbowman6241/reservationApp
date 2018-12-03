import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import {Table } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class TableService {
  private url = '../assets/tables.json';
  constructor(private http: HttpClient) { }

  getTables() {
    return this.http.get<Table[]>(this.url);
  }
}
