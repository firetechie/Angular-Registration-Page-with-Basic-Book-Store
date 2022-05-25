import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';
import { ApiService } from '../shared/api.service';
import { StudentModel } from './books-dashboard.model';
@Component({
  selector: 'app-student-dashboard',
  templateUrl: './books-dashboard.component.html',
  styleUrls: ['./books-dashboard.component.css'],
})
export class BooksDashboardComponent implements OnInit {
  wltoggle = true;
  cltoggle = true;
  formValue!: FormGroup;
  studentData!: any;
  viewonly: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private route: Router
  ) {
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url == '/viewlist') {
          this.viewonly = true;
        }
      }
    });
  }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      roll: [''],
      email: [''],
      mobile: [''],
      salary: [''],
    });
    this.getStudentDetails();
  }
  getStudentDetails() {
    // get Api Done
    this.api.getStudents().subscribe((res) => {
      this.studentData = res;
      console.log(this.studentData);
    });
  }
  addtowishlist(student: StudentModel) {
    student.wishlist = !student.wishlist;
    //this.wltoggle = !this.wltoggle;
    this.api.updateStudents(student, student.id).subscribe((res) => {
      alert('Book Detail Record Updated');
      this.getStudentDetails();
    });
  }
  addtocompletedList(student: StudentModel) {
    student.completedList = !student.completedList;
    this.api.updateStudents(student, student.id).subscribe((res) => {
      alert('Book has been Completed');

      this.getStudentDetails();
    });
  }
}
