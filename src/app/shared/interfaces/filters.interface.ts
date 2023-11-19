export type TFilters = {
  [key: string]: string | number | TOperatorFilter
}

type TOperatorFilter = {
  [key in TOperators]: string | string[] | number | number[]
}

type TOperators = '$in'

export type TFiltersRaw = {
  [key: string]: string | string[] | number | number[]
}
