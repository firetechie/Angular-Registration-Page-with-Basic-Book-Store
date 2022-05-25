import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-completed-list',
  templateUrl: './completed-list.component.html',
  styleUrls: ['./completed-list.component.css'],
})
export class CompletedListComponent implements OnInit {
  bookData!: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    console.log(this.getBooksDetails());
    console.log(this.bookData);
    this.getBooksDetails();
  }
  getBooksDetails() {
    // get Api Done
    this.api.getStudents().subscribe((res) => {
      this.bookData = res;
      console.log(this.bookData[0].completedList);
    });
  }
}
