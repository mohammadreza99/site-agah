import { Component, OnInit } from '@angular/core';
import { Service } from '@shared/models/service.model';

@Component({
  selector: 'ag-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  constructor() {}

  services: Service[] = [
    {
      title: 'Business Analytics',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here',
      icon: 'assets/images/report.png',
    },
    {
      title: 'Product Design',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here',
      icon: 'assets/images/design.png',
    },
    {
      title: 'Digital Marketing',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here',
      icon: 'assets/images/spam.png',
    },
    {
      title: 'Development',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here',
      icon: 'assets/images/development.png',
    },
  ];
  ngOnInit(): void {}
}
