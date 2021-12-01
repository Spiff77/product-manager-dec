import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../model/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  @Output() evt = new EventEmitter<Product>();

  @HostListener('click')
  productClick(): void {
    this.evt.emit(this.product);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
