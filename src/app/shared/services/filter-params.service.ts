import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { UntilDestroy } from '@ngneat/until-destroy'

import { BehaviorSubject, Observable } from 'rxjs'

import { TFilters, TFiltersRaw } from '../interfaces/filters.interface'

@UntilDestroy()
@Injectable()
export class FilterParamsService {
  private _filterParams$ = new BehaviorSubject<TFilters>({})

  get filterParams$(): Observable<TFilters> {
    return this._filterParams$.asObservable()
  }

  constructor(private httpClient: HttpClient) {}

  setFilters(filters: TFiltersRaw): void {
    this._filterParams$.next(this.serializeFilters(filters))
  }

  private serializeFilters(data: TFiltersRaw): TFilters {
    const filters = {} as TFilters
    Object.entries(data).forEach(([filterKey, filterValue]) => {
      if (typeof filterValue === 'number' || typeof filterValue === 'string') {
        if (filterValue) {
          filters[filterKey] = filterValue
        }
      } else {
        if (filterValue.length) {
          filters[filterKey] = { $in: filterValue }
        }
      }
    })
    return filters
  }
}
