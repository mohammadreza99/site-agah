import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ag-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor() {}

  products = [];
  testimonials = [];
  personnel = [];
  blogs = [];
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
      this.testimonials.push({
        customerName: 'Ali Hasani',
        customerImage: 'assets/images/customer.png',
        projectName: 'Alibaba Seo',
        comment: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.`,
      });
      this.blogs.push({
        image: 'assets/images/blog1.png',
        title: 'blog title',
        description: `this is some sample test dor description of blog.this is some sample test dor description of blog.this is some sample test dor description of blog.this is some sample test dor description of blog.`,
        commentCounts: 3,
        date: '2020-01-15',
      });
      this.personnel.push({
        image: 'assets/images/user2.png',
        title: 'Ali Hasani',
        subtitle: 'Member of the Board',
      });
    }
  }
}
