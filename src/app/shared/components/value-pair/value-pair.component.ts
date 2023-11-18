import { Component, Input } from '@angular/core'

import { TValuePair } from './value-pair.interface'

@Component({
  selector: 'app-value-pair',
  templateUrl: './value-pair.component.html',
  styleUrls: ['./value-pair.component.scss'],
})
export class ValuePairComponent {
  @Input({ required: true }) pair!: TValuePair
}
