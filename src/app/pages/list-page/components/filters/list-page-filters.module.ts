import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { ListPageFiltersComponent } from './list-page-filters.component'
import { MultiselectInputModule } from '../../../../shared/components/controls/multiselect-input/multiselect-input.module'
import { TextInputModule } from '../../../../shared/components/controls/text-input/text-input.module'
import { RadioInputModule } from '../../../../shared/components/controls/radio-input/radio-input.module'

@NgModule({
  declarations: [ListPageFiltersComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MultiselectInputModule,
    TextInputModule,
    RadioInputModule,
  ],
  providers: [],
  exports: [ListPageFiltersComponent],
})
export class ListPageFiltersModule {}
