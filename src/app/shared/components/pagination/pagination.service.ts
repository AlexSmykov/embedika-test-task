import { Injectable } from '@angular/core'
import { UntilDestroy } from '@ngneat/until-destroy'

import { BehaviorSubject, Observable } from 'rxjs'

import { TMovePossibility } from './pagination.interface'
import { EPaginationDirection } from './pagination.enum'

@UntilDestroy()
@Injectable()
export class PaginationService {
  private _movePossibility$ = new BehaviorSubject<TMovePossibility>({
    canPrev: false,
    canNext: false,
  })

  get movePossibility$(): Observable<TMovePossibility> {
    return this._movePossibility$.asObservable()
  }

  private _currentPage$ = new BehaviorSubject<number>(1)

  get currentPage$(): Observable<number> {
    return this._currentPage$.asObservable()
  }

  setCurrentPage(moveDirection?: EPaginationDirection, page?: number): void {
    if (page) {
      this._currentPage$.next(page)
      return
    }
    if (moveDirection) {
      switch (moveDirection) {
        case EPaginationDirection.NEXT:
          this._currentPage$.next(this._currentPage$.getValue() + 1)
          break
        case EPaginationDirection.PREVIOUS:
          this._currentPage$.next(this._currentPage$.getValue() - 1)
          break
      }
    }
  }

  setMovePossibility(canMove: { canPrev: boolean; canNext: boolean }): void {
    this._movePossibility$.next({
      canPrev: canMove.canPrev,
      canNext: canMove.canNext,
    })
  }
}
