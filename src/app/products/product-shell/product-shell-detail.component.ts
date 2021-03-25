import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {IProduct} from '../product';
import {Subscription} from 'rxjs';

@Component({
  selector: 'pm-product-shell-detail',
  templateUrl: './product-shell-detail.component.html'
})
export class ProductShellDetailComponent implements OnInit, OnDestroy {
  pageTitle = 'Product Detail';
  errorMessage: string;
  product: IProduct | null;
  sub: Subscription;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.sub = this.productService.selectedProductChanges$.subscribe({
      next: selectedProduct => {
        this.product = selectedProduct;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
