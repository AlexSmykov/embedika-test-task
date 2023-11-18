import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LoadingPlaceholderComponent } from './loading-placeholder.component'
import { ListItemModule } from '../list/components/list-item/list-item.module'

@NgModule({
  declarations: [LoadingPlaceholderComponent],
  imports: [CommonModule, ListItemModule],
  providers: [],
  exports: [LoadingPlaceholderComponent],
})
export class LoadingPlaceholderModule {}
