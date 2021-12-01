import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductAddComponent} from './product-add/product-add.component';
import {ProductItemComponent} from './product-item/product-item.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {TitleComponent} from '../shared/title/title.component';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: '/add', component: ProductAddComponent },
  { path: '/:id', component: ProductDetailComponent },
];

@NgModule({
  declarations: [
    ProductListComponent,
    ProductAddComponent,
    ProductItemComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
