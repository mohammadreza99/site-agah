import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  constructor() {}

  processes = [];
  partners = [];
  otherProducts = [];
  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      this.processes.push({
        title: 'Product Design',
        image: 'assets/images/company.png',
        description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing.`,
      });
    }

    for (let i = 0; i < 10; i++) {
      this.partners.push({
        name: 'company',
        image: 'assets/images/partner.png',
      });
    }

    for (let i = 0; i < 3; i++) {
      this.otherProducts.push({
        title: 'Crypto Currency',
        image: 'assets/images/blog1.png',
      });
    }
  }
}
