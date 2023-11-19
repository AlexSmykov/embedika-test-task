import { Component, Input } from '@angular/core'

import { TListItem } from '../../list.interface'

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input({ required: true }) item!: TListItem
}
