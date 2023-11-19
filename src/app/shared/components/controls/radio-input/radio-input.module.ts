import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { RadioInputComponent } from './radio-input.component'
import { ControlWrapperModule } from '../control-wrapper/control-wrapper.module'

@NgModule({
  declarations: [RadioInputComponent],
  imports: [CommonModule, ReactiveFormsModule, ControlWrapperModule],
  providers: [],
  exports: [RadioInputComponent],
})
export class RadioInputModule {}
