import axios, { AxiosResponse } from 'axios'

import { setPizzas, setPizzasLength }  from '../actions/index'
import { URL_PIZZAS, URL_LENGTH } from '../../const'

import { PizzaType } from '../reducers/pizzas'

export const preFetchPizzas = () => async (dispatch: any) => {
  const { data }: AxiosResponse<number> =  await axios.get(URL_LENGTH)
  dispatch(setPizzasLength(data))
}


export const fetchPizzas = () => async (dispatch: any) =>  {
  
  const { data }: AxiosResponse<PizzaType[]> =  await axios.get(URL_PIZZAS)
  dispatch(setPizzas(data))
}
