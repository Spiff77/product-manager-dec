import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SupplierListComponent} from './supplier-list/supplier-list.component';
import {SupplierItemComponent} from './supplier-item/supplier-item.component';
import {SelectedBoxDirective} from '../selected-box.directive';
import {SupplierAddComponent} from './supplier-add/supplier-add.component';
import {SupplierDetailComponent} from './supplier-detail/supplier-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {TitleComponent} from '../shared/title/title.component';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  { path: '', component: SupplierListComponent },
  { path: '/add', component: SupplierAddComponent },
  { path: '/:id', component: SupplierDetailComponent },
];


@NgModule({
  declarations: [
    SupplierDetailComponent,
    SupplierListComponent,
    SupplierItemComponent,
    SupplierAddComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class SupplierModule { }
