enum ERoutes {
  LIST_PAGE = 'LIST_PAGE',
  LIST_ITEM = 'LIST_ITEM',
}

enum ERoutesParts {
  ID = ':id',
  LIST_PAGE = 'list-page',
}

export const EPartialRoutes: { [key in ERoutes]: string } = {
  [ERoutes.LIST_PAGE]: [ERoutesParts.LIST_PAGE].join('/'),
  [ERoutes.LIST_ITEM]: [ERoutesParts.LIST_PAGE, ERoutesParts.ID].join('/'),
}

export const EFullRoutes: { [key in ERoutes]: any } = {
  [ERoutes.LIST_PAGE]: ['/', ERoutesParts.LIST_PAGE],
  [ERoutes.LIST_ITEM]: (id: number) => ['/', ERoutesParts.LIST_PAGE, id],
}
