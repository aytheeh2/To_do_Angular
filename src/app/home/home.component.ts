import { Component, OnInit } from '@angular/core';
import { APICALLService } from '../services/apicall.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    public api: APICALLService,
  ) { }

  // data = {
  //   'task_name': '',
  //   'task_desc': '',
  //   'date_added': ''
  // };

  data: any;

  ngOnInit() {
    this.api.notcompletedtasks().subscribe(
      response => {
        this.data = response
        console.log(this.data)
      }
    )
  };

  create_data = {
    'task_name': 'sssssss',
    'task_desc': 'ddddddd',
    'date_added': '',
  };

  onSubmit_create_task() {
    console.log('onSubmit Called');
    console.log(this.create_data);
    this.api.create_task(this.create_data).subscribe(
      response => {
        console.log(response, 'create_task post method');
        this.ngOnInit();
      }
    );
  };

}
