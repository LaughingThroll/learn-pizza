import axios, { AxiosResponse } from 'axios'

import { IPizzaTypes } from '../../types'

import { setPizzas, setPizzasLength, setPizzasLoaded }  from '../actions/index'
import { URL_PIZZAS, URL_LENGTH } from '../../const'


export const preFetchPizzas = () => async (dispatch: any) => {
  dispatch(setPizzasLoaded(false))
  const { data }: AxiosResponse<number> =  await axios.get(URL_LENGTH)
  dispatch(setPizzasLength(data))
}


export const fetchPizzas = (activeCategory: number | null, activeSort: string) => async (dispatch: any) =>  {
  
  const { data }: AxiosResponse<IPizzaTypes[]> = await axios.get(`${URL_PIZZAS}?${activeCategory === null ? '' : `category=${activeCategory}`}&_sort=${activeSort}&_order=asc`)
  dispatch(setPizzas(data))
}
