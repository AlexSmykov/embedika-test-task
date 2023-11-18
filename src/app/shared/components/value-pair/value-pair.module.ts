import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ValuePairComponent } from './value-pair.component'

@NgModule({
  declarations: [ValuePairComponent],
  imports: [CommonModule],
  providers: [],
  exports: [ValuePairComponent],
})
export class ValuePairModule {}
