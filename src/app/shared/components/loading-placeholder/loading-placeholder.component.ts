import { Component } from '@angular/core'

import { LoadService } from '../../services/load.service'

@Component({
  selector: 'app-loading-placeholder',
  templateUrl: './loading-placeholder.component.html',
  styleUrls: ['./loading-placeholder.component.scss'],
})
export class LoadingPlaceholderComponent {
  isLoading$ = this.loadService.isLoading$

  constructor(private loadService: LoadService) {}
}
