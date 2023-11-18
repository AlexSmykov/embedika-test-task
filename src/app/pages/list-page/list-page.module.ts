import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'

import { ListPageComponent } from './list-page.component'
import { ListPageRoutingModule } from './list-page-routing.module'
import { ListModule } from '../../shared/components/list/list.module'
import { PaginationModule } from '../../shared/components/pagination/pagination.module'

@NgModule({
  declarations: [ListPageComponent],
  imports: [
    CommonModule,
    ListPageRoutingModule,
    ListModule,
    PaginationModule,
    HttpClientModule,
  ],
  providers: [],
})
export class ListPageModule {}
