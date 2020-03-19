import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Dog} from '../../model/Dog';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) {
  }
  // Apeleaza endpointul pentru getall dogs:
  getDogs(): Observable<Dog[]> {
    console.log('Esteeee in servie-getAllDogs');
    const url = 'http://localhost:8080/dogs';
    console.log(url);
    return this.http.get<Dog[]>(url, this.httpOptions);
  }
  getDog(idDog: number): Observable<Dog> {
    console.log('Esteeee in servie-getDog');
    const url = 'http://localhost:8080/dogs/'+idDog;
    console.log(url);
    return this.http.get<Dog>(url, this.httpOptions);
  }
  // Adauga dog:
  addDog(dog: Dog): Observable<any> {
    const url = 'http://localhost:8080/dogs';
    console.log("ID: "+dog.idDog)
    return this.http.post(url, dog, this.httpOptions);
  }

  updateDog(dog:Dog):Observable<any>{
    const url = 'http://localhost:8080/dogs';
    return this.http.put(url, dog, this.httpOptions);
  }

  deleteDog(idDog: number):Observable<any>{
    const url = 'http://localhost:8080/dogs/'+idDog;
    return this.http.delete(url, this.httpOptions)
  }
}
