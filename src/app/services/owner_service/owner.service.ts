import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Dog} from '../../model/Dog';
import {Owner} from '../../model/Owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    })
  };
  constructor(private http: HttpClient) { }
  getOwners(): Observable<Owner[]> {
    console.log('Este in service -getOwners');
    const url = 'http://localhost:8080/owners';
    return this.http.get<Owner[]>(url, this.httpOptions);
  }
  getOwner(idOwner: number): Observable<Owner> {
    const url = 'http://localhost:8080/owners/' + idOwner;
    return this.http.get<Owner>(url, this.httpOptions);
  }


}
