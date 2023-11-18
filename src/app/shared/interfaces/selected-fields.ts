export type TSelectedFields<Keys extends keyof Type, Type> = {
  [K in Keys]: Type[K]
}
