import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { TextInputComponent } from './text-input.component'
import { ControlWrapperModule } from '../control-wrapper/control-wrapper.module'

@NgModule({
  declarations: [TextInputComponent],
  imports: [CommonModule, ReactiveFormsModule, ControlWrapperModule],
  providers: [],
  exports: [TextInputComponent],
})
export class TextInputModule {}
