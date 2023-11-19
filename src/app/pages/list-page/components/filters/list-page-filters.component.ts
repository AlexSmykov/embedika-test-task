import { Component, OnInit } from '@angular/core'
import { NonNullableFormBuilder } from '@angular/forms'

import { debounceTime } from 'rxjs'

import { TMappedFormControls } from '../../../../shared/interfaces/mapped-form-controls.interface'
import { TListFilters } from './list-page-filters.interface'
import { TNamedEntity } from '../../../../shared/interfaces/named-entity.interface'
import { FilterParamsService } from '../../../../shared/services/filter-params.service'
import { PaginationService } from '../../../../shared/components/pagination/pagination.service'

@Component({
  selector: 'app-list-page-filters',
  templateUrl: './list-page-filters.component.html',
  styleUrls: ['./list-page-filters.component.scss'],
})
export class ListPageFiltersComponent implements OnInit {
  filtersFormGroup: TMappedFormControls<TListFilters> = this.fb.group({
    name: this.fb.control(''),
    home_port: this.fb.control<number[] | string[]>([]),
    type: this.fb.control(''),
  })

  portVariants: TNamedEntity[] = [
    {
      name: 'Port Canaveral',
      id: 'Port Canaveral',
    },
    {
      name: 'Port of Los Angeles',
      id: 'Port of Los Angeles',
    },
    {
      name: 'Fort Lauderdale',
      id: 'Fort Lauderdale',
    },
  ]

  typeVariants: TNamedEntity[] = [
    {
      name: 'Barge',
      id: 'Barge',
    },
    {
      name: 'Cargo',
      id: 'Cargo',
    },
    {
      name: 'High Speed Craft',
      id: 'High Speed Craft',
    },
    {
      name: 'Tug',
      id: 'Tug',
    },
  ]

  constructor(
    private fb: NonNullableFormBuilder,
    private filterParamsService: FilterParamsService,
    private paginationService: PaginationService
  ) {}

  ngOnInit(): void {
    this.subOnFilterChange()
  }

  subOnFilterChange(): void {
    this.filtersFormGroup.valueChanges
      .pipe(debounceTime(500))
      .subscribe((changes) => {
        this.filterParamsService.setFilters(changes)
        this.paginationService.setCurrentPage(undefined, 1)
      })
  }
}
