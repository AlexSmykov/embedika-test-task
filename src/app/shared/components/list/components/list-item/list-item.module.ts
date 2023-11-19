import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'

import { ListItemComponent } from './list-item.component'
import { PaginationModule } from '../../../pagination/pagination.module'
import { BackButtonPageModule } from '../../../back-button-page/back-button-page.module'
import { ValuePairModule } from '../../../value-pair/value-pair.module'

@NgModule({
  declarations: [ListItemComponent],
  imports: [
    CommonModule,
    PaginationModule,
    BackButtonPageModule,
    ValuePairModule,
    RouterLink,
  ],
  providers: [],
  exports: [ListItemComponent],
})
export class ListItemModule {}
