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

  get_task_by_id(id: any) {
    return this.http.get(`http://127.0.0.1:8000/alltasks/${id}/`);
  };

  update_task(id: any, data: any) {
    return this.http.put(`http://127.0.0.1:8000/alltasks/${id}/`, data);
  };

  delete_task_by_id(id: any) {
    return this.http.delete(`http://127.0.0.1:8000/alltasks/${id}/`);
  };

  change_completed_status_by_id(id: any, data: any) {
    return this.http.put(`http://127.0.0.1:8000/alltasks/${id}/`, data);
  };

  completed_tasks() {
    return this.http.get(`http://127.0.0.1:8000/completedtasks/`);
  };

  headers: any;
  token: any;

}




