import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { MultiselectInputComponent } from './multiselect-input.component'
import { ControlWrapperModule } from '../control-wrapper/control-wrapper.module'

@NgModule({
  declarations: [MultiselectInputComponent],
  imports: [CommonModule, ReactiveFormsModule, ControlWrapperModule],
  providers: [],
  exports: [MultiselectInputComponent],
})
export class MultiselectInputModule {}
