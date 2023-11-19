import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { ControlWrapperComponent } from './control-wrapper.component'

@NgModule({
  declarations: [ControlWrapperComponent],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [],
  exports: [ControlWrapperComponent],
})
export class ControlWrapperModule {}
