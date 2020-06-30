import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ag-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  constructor() {}

  employers = [];
  blogs = [];
  personnel = [];
  histories = [];

  ngOnInit(): void {
    for (let i = 0; i < 4; i++) {
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
    for (let i = 0; i < 11; i++) {
      this.employers.push({
        image: 'assets/images/customer.png',
        name: 'Ali Hasani',
        post: 'product manager',
      });
      this.histories.push({
        image: 'assets/images/company.png',
        description: `this is some sample test dor description of blog.this is some sample test dor description of blog.this is some sample test dor description of blog.this is some sample test dor description of blog.`,
        year: '200' + i,
      });
    }
  }
}
