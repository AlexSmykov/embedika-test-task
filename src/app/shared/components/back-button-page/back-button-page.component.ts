import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-back-button-page',
  templateUrl: './back-button-page.component.html',
  styleUrls: ['./back-button-page.component.scss'],
})
export class BackButtonPageComponent {
  @Input({ required: true }) label!: string
  @Input({ required: true }) backUrl!: string[]
}
