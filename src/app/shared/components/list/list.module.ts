import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ListComponent } from './list.component'
import { ListItemModule } from './components/list-item/list-item.module'
import { LoadingPlaceholderModule } from '../loading-placeholder/loading-placeholder.module'

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, ListItemModule, LoadingPlaceholderModule],
  providers: [],
  exports: [ListComponent],
})
export class ListModule {}
