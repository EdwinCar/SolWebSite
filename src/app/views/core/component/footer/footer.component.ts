import { Component, OnInit } from '@angular/core';

/**
* Created by S73261 [Edwin Higberto Mamani Canaza] on 20/03/2022.
**/
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  date: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
