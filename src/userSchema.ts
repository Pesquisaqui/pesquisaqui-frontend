//@flow

export type Area = ""

export type User = {
  id: string,
  name: string,
  surname: string,
  affiliation: string,
  area: string,
  subarea,
  avatar,
  email,
  phone,
  researchFocus: Array<string>,
  hasRegistered,
  canHelp,
  methodologyTypes: [],
  contacts,
  points,
}