import { makeAutoObservable, reaction } from 'mobx'

import { URL_LENGTH, URL_PIZZAS } from '../const'
import { IPizzaTypes} from '../types'
import { makeRequest } from '../utils'

class PizzasStore {
  protected _pizzas: IPizzaTypes[] = []
  protected _length: number = 0
  protected _isLoaded: boolean = false
  protected _sortBy: string = 'rating'
  protected _filter: number | null = null
  fetchReaction: () => void 

  constructor() {
    makeAutoObservable(this)
    this.fetchPizzas(this.pathPizzas) 
    this.fetchReaction = reaction(
      () => this.pathPizzas,
      path => this.fetchPizzas(path)
      )
    }
  
  get pathPizzas() {
    return `${URL_PIZZAS}?${this.filter === null ? '' : `category=${this.filter}`}&_sort=${this.sortBy}&_order=asc`
  }

  preFetchPizzas = async () => {
    const { length }: { length: number } = await makeRequest(URL_LENGTH)
    this.length = length
  }  
  
  fetchPizzas = async (path: string) => {
      this.isLoaded = false
      await this.preFetchPizzas()
      const pizzas = await makeRequest(path)
      this.pizzas = pizzas
      this.isLoaded = true
  }
  
  clear = () => {
    console.log('clear')
    this.fetchReaction()
  }

  get pizzas() {
   return  this._pizzas 
  }

  set pizzas(pizzas: IPizzaTypes[]) {
    this._pizzas = pizzas
  }
  
  get isLoaded() {
    return this._isLoaded
  }
  
  set isLoaded(value: boolean) {
    this._isLoaded = value
  }

  get length() {
    return this._length
  }

  set length(number: number) {
    this._length = number
  }
  get filter() {
    return this._filter
  }

  set filter(value: number | null) {
    this._filter = value
  }

  get sortBy() {
    return this._sortBy
  }

  set sortBy(value: string) {
    this._sortBy = value
  }
} 



export default new PizzasStore()