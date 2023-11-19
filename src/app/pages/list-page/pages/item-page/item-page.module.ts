import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ItemPageComponent } from './item-page.component'
import { BackButtonPageModule } from '../../../../shared/components/back-button-page/back-button-page.module'
import { ItemPageRoutingModule } from './item-page-routing.module'
import { LoadingPlaceholderModule } from '../../../../shared/components/loading-placeholder/loading-placeholder.module'
import { ValuePairModule } from '../../../../shared/components/value-pair/value-pair.module'

@NgModule({
  declarations: [ItemPageComponent],
  imports: [
    CommonModule,
    BackButtonPageModule,
    ItemPageRoutingModule,
    LoadingPlaceholderModule,
    ValuePairModule,
  ],
  providers: [],
})
export class ItemPageModule {}
