import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ListItemComponent } from './list-item.component'
import { PaginationModule } from '../../../pagination/pagination.module'
import { ValuePairModule } from '../../../value-pair/value-pair.module'

@NgModule({
  declarations: [ListItemComponent],
  imports: [CommonModule, PaginationModule, ValuePairModule],
  providers: [],
  exports: [ListItemComponent],
})
export class ListItemModule {}
