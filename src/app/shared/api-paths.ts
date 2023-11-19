const API = '/v4'
const QUERY = '/query'
const SHIPS = '/ships'

const API_SHIPS = API + SHIPS

export const API_SHIPS_QUERY = API_SHIPS + QUERY
export const API_SHIP_ITEM = (id: string) => API_SHIPS + '/' + id
