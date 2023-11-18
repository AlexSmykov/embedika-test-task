import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/list-page/list-page.module').then(
            (m) => m.ListPageModule
          ),
      },
    ],
  },
]
