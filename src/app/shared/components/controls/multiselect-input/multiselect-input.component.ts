import { Component, Input, OnInit } from '@angular/core'
import { FormControl, NonNullableFormBuilder } from '@angular/forms'

import { TNamedEntity } from '../../../interfaces/named-entity.interface'

type TCheckableNamedEntity = {
  checked: FormControl<boolean>
} & TNamedEntity

@Component({
  selector: 'app-multiselect-input',
  templateUrl: './multiselect-input.component.html',
  styleUrls: ['./multiselect-input.component.scss'],
})
export class MultiselectInputComponent implements OnInit {
  @Input({ required: true }) control!: FormControl<(number | string)[]>
  @Input({ required: true }) variants!: TNamedEntity[]
  @Input() placeholder: string = ''

  isShowDropdown = false

  variantsWithControl: TCheckableNamedEntity[] = []

  constructor(private fb: NonNullableFormBuilder) {}

  ngOnInit(): void {
    this.variants.forEach((variant) => {
      const checkboxControl = this.fb.control(false)
      checkboxControl.valueChanges.subscribe(() => {
        this.onCheckboxesValueChanged()
      })
      this.variantsWithControl.push({
        checked: checkboxControl,
        id: variant.id,
        name: variant.name,
      })
    })
  }

  onCheckboxesValueChanged(): void {
    this.control.patchValue(
      this.variantsWithControl
        .filter((item) => item.checked.value)
        .map((item) => item.id)
    )
  }

  stringify(ids: (number | string)[]): string {
    if (ids.length === 1) {
      return this.variantsWithControl.find((item) => item.id === ids[0])!.name
    }
    return `Выбраны ${ids.length}`
  }
}
