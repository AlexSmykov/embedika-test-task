import { Component, Input } from '@angular/core'
import { AbstractControl } from '@angular/forms'

@Component({
  selector: 'app-control-wrapper',
  templateUrl: './control-wrapper.component.html',
  styleUrls: ['./control-wrapper.component.scss'],
})
export class ControlWrapperComponent {
  @Input({ required: true }) control!: AbstractControl
  @Input() placeholder: string = ''
}
