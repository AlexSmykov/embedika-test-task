import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ListPageComponent } from './list-page.component'
import { EPartialRoutes } from '../../shared/router-paths'

export const routes: Routes = [
  {
    path: '',
    redirectTo: EPartialRoutes.LIST_PAGE,
    pathMatch: 'full',
  },
  {
    path: EPartialRoutes.LIST_PAGE,
    component: ListPageComponent,
  },
  {
    path: EPartialRoutes.LIST_ITEM,
    loadChildren: () =>
      import('./pages/item-page/item-page.module').then(
        (m) => m.ItemPageModule
      ),
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPageRoutingModule {}
