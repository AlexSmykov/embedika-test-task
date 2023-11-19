import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'

import { ListPageComponent } from './list-page.component'
import { ListPageRoutingModule } from './list-page-routing.module'
import { ListModule } from '../../shared/components/list/list.module'
import { PaginationModule } from '../../shared/components/pagination/pagination.module'
import { TextInputModule } from '../../shared/components/controls/text-input/text-input.module'
import { MultiselectInputModule } from '../../shared/components/controls/multiselect-input/multiselect-input.module'
import { ControlWrapperModule } from '../../shared/components/controls/control-wrapper/control-wrapper.module'
import { ListPageFiltersModule } from './components/filters/list-page-filters.module'

@NgModule({
  declarations: [ListPageComponent],
  imports: [
    CommonModule,
    ListPageRoutingModule,
    ListModule,
    PaginationModule,
    HttpClientModule,
    TextInputModule,
    MultiselectInputModule,
    ControlWrapperModule,
    ListPageFiltersModule,
  ],
  providers: [],
})
export class ListPageModule {}
