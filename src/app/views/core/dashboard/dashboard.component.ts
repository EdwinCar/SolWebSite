import { Component, OnInit } from '@angular/core';

/**
* Created by S73261 [Edwin Higberto Mamani Canaza] on 20/03/2022.
**/
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dateTime: string;

  constructor() {
    const date: Date = new Date();
    this.dateTime = date.getDate() + '/' + (date.getMonth() + 1) + '/' +
    date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
  }

  ngOnInit(): void {
  }

}
