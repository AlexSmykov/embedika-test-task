import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'

import { BackButtonPageComponent } from './back-button-page.component'

@NgModule({
  declarations: [BackButtonPageComponent],
  imports: [CommonModule, RouterLink],
  providers: [],
  exports: [BackButtonPageComponent],
})
export class BackButtonPageModule {}
