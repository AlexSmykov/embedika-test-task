import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { UntilDestroy } from '@ngneat/until-destroy'

import { BehaviorSubject, Observable } from 'rxjs'

import { TOtherFilters } from '../interfaces/filters.interface'

@UntilDestroy()
@Injectable()
export class FilterParamsService {
  private _filterParams$ = new BehaviorSubject<TOtherFilters>({})

  get filterParams$(): Observable<TOtherFilters> {
    return this._filterParams$.asObservable()
  }

  constructor(private httpClient: HttpClient) {}

  setFilters(filters: TOtherFilters): void {
    this._filterParams$.next(filters)
  }
}
