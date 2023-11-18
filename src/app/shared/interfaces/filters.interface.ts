export type TFilterParams = TPaginationParams & TOtherFilters

export type TPaginationParams = {
  limit: number
  offset: number
}

export type TOtherFilters = {
  [key: string]: string
}
