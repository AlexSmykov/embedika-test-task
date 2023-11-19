import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ListPageComponent } from './list-page.component'

export const routes: Routes = [
  {
    path: '',
    component: ListPageComponent,
  },
  // {
  //   path: EPartialRoutes.LIST_ITEM,
  //   loadChildren: () => import('./pages/').then((m) => m.MainModule),
  // },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPageRoutingModule {}
