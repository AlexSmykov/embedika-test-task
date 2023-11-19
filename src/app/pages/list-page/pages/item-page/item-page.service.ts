import { Injectable } from '@angular/core'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { HttpClient } from '@angular/common/http'

import { BehaviorSubject, Observable } from 'rxjs'

import { TAllShipDto } from '../../list-page.dto'
import { API_SHIP_ITEM } from '../../../../shared/api-paths'
import { TShip } from './item-page.interface'
import { LoadService } from '../../../../shared/services/load.service'

@UntilDestroy()
@Injectable()
export class ItemPageService {
  private _item$ = new BehaviorSubject<TShip | null>(null)

  get item$(): Observable<TShip | null> {
    return this._item$.asObservable()
  }

  constructor(
    private httpClient: HttpClient,
    private loadService: LoadService
  ) {}

  getItemAction(id: string): void {
    this.loadService
      .wrapObservable(this.httpClient.get<TAllShipDto>(API_SHIP_ITEM(id)))
      .pipe(untilDestroyed(this))
      .subscribe((result) => {
        this._item$.next(this.deserialize(result))
      })
  }

  private deserialize(dto: TAllShipDto): TShip {
    return {
      id: dto.id,
      name: dto.name,
      mass_kg: { value: dto.mass_kg + '', name: 'Вес' },
      type: { value: dto.type, name: 'Тип' },
      year_built: { value: dto.year_built + '', name: 'Год' },
      home_port: { value: dto.home_port, name: 'Порт' },
      roles: dto.roles,
    }
  }
}
