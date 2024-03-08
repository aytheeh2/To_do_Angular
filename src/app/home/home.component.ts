import { Component } from '@angular/core';
import { APICALLService } from '../services/apicall.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    public api: APICALLService,
    public router: Router
  ) { }

  // data = {
  //   'task_name': '',
  //   'task_desc': '',
  //   'date_added': ''
  // };

  data: any;
  completed_data: any;

  ngOnInit() {
    //incompleted tasks
    this.api.notcompletedtasks().subscribe(
      response => {
        this.data = response
        console.log(this.data, 'api call notcompletedtasks');
      });

    //completed tasks
    this.api.completed_tasks().subscribe(completed_tasks => {
      this.completed_data = completed_tasks
      console.log(this.completed_data);
    });

  };

  create_data = {
    'task_name': '',
    'task_desc': '',
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

  update_task_fn(id: any) {
    console.log(id, 'update_task_fn Called');
    this.router.navigate([`update`, id]); // Make sure this navigation is correct
  };

  delete_task(id: any) {
    console.log(id, "delete_task Called");
    if (confirm("Are you sure you want to delete this Task?")) {
      this.api.delete_task_by_id(id).subscribe(response => {
        console.log('delete api call ', id);
        this.ngOnInit();
      });
    }
  };

  change_completed_status(id: any) {
    console.log(id, 'change_completed_status');
    if (confirm("Is this Task Completed?")) {
      this.api.get_task_by_id(id).subscribe(response => {

        this.data = response
        if (this.data['completed'] == true) {
          this.data['completed'] = false;
        }
        else {
          this.data['completed'] = true;
        }
        this.api.change_completed_status_by_id(id, this.data).subscribe(response2 => {
          console.log(response2, 'change_completed_status_by_id');
          console.log('change_completed_status_by_id');
          this.ngOnInit();
        });
      });
    };
  };


}
