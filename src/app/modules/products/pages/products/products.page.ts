import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ag-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  constructor() {}
  products: any[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 4; i++) {
      this.products.push({
        title: 'Product Content & Distribution Management',
        imageUrl: 'assets/images/service.png',
        description: `It is a long established fact that a reader will be distracted by the readable 
        content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a 
        more-or-less normal distribution of letters, as opposed to using 'Content here, content 
        here', making it look like readable English. Many desktop publishing packages and web page 
        editors now use Lorem Ipsum as their default model text.`,
      });
    }
  }
}
