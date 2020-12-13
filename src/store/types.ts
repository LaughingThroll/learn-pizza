import { Action } from 'redux'

import { CartEnum, FilterEnum, PizzasEnum, SortEnum } from './enums'
import { IPizzaTypes, ICartPizza, removeGroupFromCartTypes, filterPayload } from '../types'



// CartTypes
export interface IAddCartActionTypes extends Action {
  type: CartEnum.ADD,
  payload: ICartPizza
}


export interface ICLearCartActionTypes extends Action {
  type: CartEnum.CLEAR
}

export interface IRemoveGroupCartActionTypes extends Action {
  type: CartEnum.REMOVE_GROUP,
  payload: removeGroupFromCartTypes
}

export interface IPlusCartPizzaActionTypes extends Action {
  type: CartEnum.PLUS,
  payload: string
}
export interface IMinusCartPizzaActionTypes extends Action {
  type: CartEnum.MINUS,
  payload: string
}

export type CartActions = IAddCartActionTypes 
| ICLearCartActionTypes 
| IRemoveGroupCartActionTypes
| IPlusCartPizzaActionTypes
| IMinusCartPizzaActionTypes


// FilterTypes

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