import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ag-workshop',
  templateUrl: './workshop.page.html',
  styleUrls: ['./workshop.page.scss'],
})
export class WorkshopPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  course = {
    title: 'Test Course',
    image: 'assets/images/company.png',
    content: 'Description Course',
    category: 'Business',
    icon: 'assets/images/outline.png',
  };
}
