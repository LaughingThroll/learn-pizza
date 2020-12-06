import { Action } from 'redux'

import { CartEnum, FilterEnum, PizzasEnum, SortEnum } from './enums'
import { IPizzaTypes } from '../types'



// CartTypes
export interface ICartPizza {
  id: number
}

export interface IAddCartActionTypes extends Action {
  type: CartEnum.ADD,
  payload: ICartPizza
}

export interface IPriceCartActionTypes extends Action {
  type: CartEnum.TOTAL_PRICE,
  payload: number
}

export interface ICountCartActionTypes extends Action {
  type: CartEnum.TOTAL_COUNT,
  payload: number
}



export type CartActions = IAddCartActionTypes | ICountCartActionTypes | IPriceCartActionTypes


// FilterTypes
export type filterPayload = number | null

export interface IFiltersActionTypes extends Action {
  type: FilterEnum.SET,
  payload: filterPayload
}

export type FiltersActions = IFiltersActionTypes

// SortTypes
export interface ISortByActionTypes extends Action {
  type: SortEnum.SET,
  payload: string
}

export type SortActions = ISortByActionTypes

// PizzasTypes




export interface ISetPizzasActionTypes extends Action {
  type: PizzasEnum.SET,
  payload: IPizzaTypes[],
}

export interface ILengthPizzasActionTypes extends Action {
  type: PizzasEnum.LENGTH,
  payload: number,
}

export interface ILoadedPizzasActionTypes extends Action {
  type: PizzasEnum.LOADED,
  payload: boolean,
}



export type PizzasActions = ISetPizzasActionTypes | ILengthPizzasActionTypes | ILoadedPizzasActionTypes