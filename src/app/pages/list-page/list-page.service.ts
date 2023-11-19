import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'

import { BehaviorSubject, combineLatest, Observable, switchMap } from 'rxjs'

import { TListItem } from '../../shared/components/list/list.interface'
import { shipSelectedFields, TQueriedShipDto } from './list-page.dto'
import { PaginationService } from '../../shared/components/pagination/pagination.service'
import { FilterParamsService } from '../../shared/services/filter-params.service'
import { TQuery } from '../../shared/interfaces/query-response'
import { LoadService } from '../../shared/services/load.service'
import { API_SHIPS_QUERY } from '../../shared/api-paths'

@UntilDestroy()
@Injectable()
export class ListPageService {
  private _data$ = new BehaviorSubject<TListItem[] | null>(null)

  get data$(): Observable<TListItem[] | null> {
    return this._data$.asObservable()
  }

  constructor(
    private httpClient: HttpClient,
    private paginationService: PaginationService,
    private filterParamsService: FilterParamsService,
    private loadService: LoadService
  ) {}

  getDataAction(pageSize: number): void {
    combineLatest({
      pagination: this.paginationService.currentPage$,
      filters: this.filterParamsService.filterParams$,
    })
      .pipe(
        untilDestroyed(this),
        switchMap((params) => {
          const options = {
            limit: pageSize,
            offset: (params.pagination - 1) * pageSize,
            select: shipSelectedFields,
          }

          this.loadService.startLoading()
          return this.httpClient
            .post<TQuery<TQueriedShipDto>>(API_SHIPS_QUERY, {
              query: { ...params.filters },
              options: options,
            })
            .pipe(untilDestroyed(this))
        })
      )
      .subscribe((result) => {
        this.loadService.endLoading()
        this._data$.next(this.deserialize(result.docs))
        this.paginationService.setMovePossibility({
          canPrev: result.hasPrevPage,
          canNext: result.hasNextPage,
        })
      })
  }

  private deserialize(dto: TQueriedShipDto[]): TListItem[] {
    return dto.map((item) => {
      return {
        id: item.id,
        name: item.name,
        values: [
          {
            name: 'Тип',
            value: item.type,
          },
          {
            name: 'Порт',
            value: item.home_port,
          },
        ],
      }
    })
  }
}
