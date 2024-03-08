import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class APICALLService {

  constructor(
    public router: Router,
    public http: HttpClient
  ) { }

  notcompletedtasks() {
    return this.http.get(`http://127.0.0.1:8000/notcompletedtasks/`);
  };

  create_task(data: any) {
    return this.http.post(`http://127.0.0.1:8000/alltasks/`, data);
  };

  headers: any;
  token: any;

}




