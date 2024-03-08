import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APICALLService } from '../services/apicall.service';
@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent {
  constructor(
    public activated_route: ActivatedRoute,
    public route: Router,
    public api_call_service: APICALLService,
  ) { }

  id: any;
  data: any;

  create_data = {
    'task_name': '',
    'task_desc': '',
    'date_added': '',
  };
  ngOnInit() {
    this.id = this.activated_route.snapshot.paramMap.get('id');
    console.log(this.id, ': id');
    this.api_call_service.get_task_by_id(this.id).subscribe((response) => {
      console.log(response);
      console.log('data get for :', this.id);
      this.data = response;
    });
  };

  onSubmit() {
    console.log(this.data);
    this.api_call_service.update_task(this.data.id, this.data).subscribe(response => {
      console.log(response);
      console.log('data edited for ', this.data.id);
      this.route.navigate(['']);
    });
  };


}
