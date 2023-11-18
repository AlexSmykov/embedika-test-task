import { Component, Input } from '@angular/core'

import { Observable } from 'rxjs'

import { TListItem } from './list.interface'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input({ required: true }) data$!: Observable<TListItem[] | null>
}
