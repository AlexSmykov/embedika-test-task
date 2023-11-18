import { Component, OnInit } from '@angular/core'
import { UntilDestroy } from '@ngneat/until-destroy'

import { ListPageService } from './list-page.service'
import { FilterParamsService } from '../../shared/services/filter-params.service'
import { LoadService } from '../../shared/services/load.service'
import { PaginationService } from '../../shared/components/pagination/pagination.service'

@UntilDestroy()
@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
  providers: [
    ListPageService,
    FilterParamsService,
    LoadService,
    PaginationService,
  ],
})
export class ListPageComponent implements OnInit {
  PAGE_SIZE = 5

  data$ = this.listPageService.data$

  constructor(private listPageService: ListPageService) {}

  ngOnInit(): void {
    this.listPageService.getDataAction(this.PAGE_SIZE)
  }
}
