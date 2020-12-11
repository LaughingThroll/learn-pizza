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