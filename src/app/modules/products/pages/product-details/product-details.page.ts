import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Product, Partner, Process } from '@shared/models/product.model';
import { ProductService } from '@core/http/product/product.service';
import { PartnerService } from '@core/http/partner/partner.service';
import { ProcessService } from '@core/http/process/process.service';

@Component({
  selector: 'ag-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private partnerService: PartnerService,
    private processService: ProcessService
  ) {}

  processes$: Observable<Process[]>;
  product$: Observable<Product>;
  partners$: Observable<Partner[]>;
  otherProducts$: Observable<Product[]>;

  ngOnInit(): void {
    const productId = +this.route.snapshot.paramMap.get('id');
    this.product$ = this.productService.getProductById(productId);
    this.partners$ = this.partnerService.getPartners();
    this.processes$ = this.processService.getProcesses();
    this.otherProducts$ = this.productService.getProducts();
  }
}
