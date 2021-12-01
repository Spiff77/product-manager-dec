import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../model/Product';
import {Supplier} from '../../model/Supplier';

@Component({
  selector: 'app-supplier-item',
  templateUrl: './supplier-item.component.html',
  styleUrls: ['./supplier-item.component.scss']
})
export class SupplierItemComponent implements OnInit {

  @Input() supplier: Supplier;
  @Output() evt = new EventEmitter<Supplier>();

  @HostListener('click')
  productClick(): void {
    this.evt.emit(this.supplier);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
