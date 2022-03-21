import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes } from './actions';
import { ShopService } from '../shop.service';

@Injectable()
export class ShopEffects {
  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(ActionTypes.LoadItems),
    mergeMap(() =>
      this.shopService.getAll().pipe(
        map(products => {
          return { type: ActionTypes.LoadSuccess, payload: products };
        }),
        catchError(() => EMPTY)
      )
    )
  );

  constructor(
    private actions$: Actions,
    private shopService: ShopService
  ) {}
}
