import { Component, Input } from '@angular/core'
import { FormControl } from '@angular/forms'

import { TNamedEntity } from '../../../interfaces/named-entity.interface'

@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.scss'],
})
export class RadioInputComponent {
  @Input({ required: true }) control!: FormControl
  @Input({ required: true }) variants!: TNamedEntity[]
}
