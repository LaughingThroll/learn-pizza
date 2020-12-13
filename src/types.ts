export interface IPizzaTypes {
  id: string,
  imageUrl: string,
  name: string,
  types: number[],
  sizes: number[],
  price: number,
  category: number,
  rating: number
}


export interface ICartPizza {
  id: string,
  name: string,
  imageUrl: string,
  price: number,
  type: string,
  size: number
}


export interface IThisPizzasTypes {
    thisPizzas: ICartPizza[],
    thisAllPrice: number,
    thisAllCount: number
}


export type CartPizzasTypes = {
  [id: string]: {
    [type: string]: {
      [size: string]: IThisPizzasTypes 
    }
  } 
}


export interface IOneOfPizzasTypes {
  id: string,
  name: string,
  imageUrl: string,
  type: string,
  size: string,
  allPrice: number,
  allCount: number
}


export type removeGroupFromCartTypes = string


export interface IPizzasStateTypes {
  pizzas: IPizzaTypes[],
  length: number,
  isLoaded: boolean
}

export type filterPayload = number | null

export interface ICartStateTypes {
  cartPizzas: CartPizzasTypes,
  totalPrice: number,
  totalCount: number
}

export interface IFiltersStateTypes {
  filter: filterPayload
}

export interface ISortStateTypes {
  sortBy: string
}


export interface IMainState {
  pizzasReducer: IPizzasStateTypes,
  cart: ICartStateTypes, 
  sorting: ISortStateTypes,
  filters: IFiltersStateTypes
}
