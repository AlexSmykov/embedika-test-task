import { Injectable } from '@angular/core'

import { BehaviorSubject, finalize, Observable } from 'rxjs'

@Injectable()
export class LoadService {
  private _isLoading$ = new BehaviorSubject(false)

  get isLoading$(): Observable<boolean> {
    return this._isLoading$.asObservable()
  }

  startLoading(): void {
    this._isLoading$.next(true)
  }

  endLoading(): void {
    this._isLoading$.next(false)
  }

  wrapObservable<T>(observable$: Observable<T>): Observable<T> {
    this.startLoading()
    return observable$.pipe(
      finalize(() => {
        console.log('awdawd')
        this.endLoading()
      })
    )
  }
}
