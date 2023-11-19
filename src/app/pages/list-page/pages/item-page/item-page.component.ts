import { Component, OnInit } from '@angular/core'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { ActivatedRoute, Params } from '@angular/router'

import { ItemPageService } from './item-page.service'
import { EFullRoutes } from '../../../../shared/router-paths'
import { LoadService } from '../../../../shared/services/load.service'

@UntilDestroy()
@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss'],
  providers: [ItemPageService, LoadService],
})
export class ItemPageComponent implements OnInit {
  item$ = this.listPageService.item$

  EFullRoutes = EFullRoutes

  constructor(
    private listPageService: ItemPageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(untilDestroyed(this))
      .subscribe((params: Params) => {
        const id = params['id']
        if (id) {
          this.listPageService.getItemAction(id)
        }
      })
  }

  stringifyRoles(roles: string[]): string {
    return roles.join(', ')
  }
}
