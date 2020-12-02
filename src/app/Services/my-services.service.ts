
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Users } from '../accounts/users';



const httpOptions =
{
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class MyServicesService {

  baseUrl = "http://localhost:3000/";

  constructor(public http: HttpClient) { }
 

  regsiterUser(data:Users):Observable<any>{
    return this.http.post(this.baseUrl + 'user',data);
  }
}
