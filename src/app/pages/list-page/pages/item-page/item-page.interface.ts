import { TValuePair } from '../../../../shared/components/value-pair/value-pair.interface'

export type TShip = {
  type: TValuePair
  mass_kg: TValuePair
  year_built: TValuePair
  home_port: TValuePair
  roles: string[]
  name: string
  id: string
}
