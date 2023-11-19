import { Component, EventEmitter, Output } from '@angular/core'

import { PaginationService } from './pagination.service'
import { EPaginationDirection } from './pagination.enum'
import { LoadService } from '../../services/load.service'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Output() pageChange = new EventEmitter<void>()

  isLoading$ = this.loadService.isLoading$

  currentPage$ = this.paginationService.currentPage$
  movePossibility$ = this.paginationService.movePossibility$

  constructor(
    private paginationService: PaginationService,
    private loadService: LoadService
  ) {}

  onPagePrev(): void {
    this.paginationService.setCurrentPage(EPaginationDirection.PREVIOUS)
    this.pageChange.emit()
  }

  onPageNext(): void {
    this.paginationService.setCurrentPage(EPaginationDirection.NEXT)
    this.pageChange.emit()
  }
}
