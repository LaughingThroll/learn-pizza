import { makeAutoObservable } from 'mobx'

import { CartPizzasTypes, ICartPizza, IThisPizzasTypes } from '../types'
import { flatObject } from '../utils'

class CartStore {
  protected _cart: CartPizzasTypes = {}

  constructor() {
    makeAutoObservable(this)
  }

  addToCart = (pizza: ICartPizza) => {
    const { id, type, size } = pizza

    if (!this.cart[id]) this.cart[id] = {}
    if (!this.cart[id][type]) this.cart[id][type] = {}
    if (!this.cart[id][type][size]) this.cart[id][type][size] = { thisPizzas: [], thisAllPrice: 0, thisAllCount: 0 }

    const thisPizzas = [...this.cart[id][type][size].thisPizzas, pizza]

    this.cart = {
      ...this.cart,
      [id]: {
        ...this.cart[id],
        [type]: {
          ...this.cart[id][type],
          [size]: {
            thisPizzas,
            thisAllPrice: this.getTotalPrice(thisPizzas),
            thisAllCount: thisPizzas.length,
          }
        }
      }
    }
  }



  clearCart = () => {
    if (window.confirm('Вы действительно хотите очистить корзину?')) this.cart = {}
  }

  removeGroupFromCart = (path: string) => {
    if (window.confirm('Вы действительно хотите удалить?')) {
      const [id, type, size] = path.split('-')

      delete this.cart[id][type][size]

      if (!Object.values(this.cart[id][type]).length) delete this.cart[id][type]
      if (!Object.values(this.cart[id]).length) delete this.cart[id]

    }
  }

  plusPizza = (path: string) => {
    const [id, type, size] = path.split('-')

    const newPlusPizzas: IThisPizzasTypes = this.cart[id][type][size]
    const newPlusPizza: ICartPizza = newPlusPizzas.thisPizzas[0]
    newPlusPizzas.thisAllCount++
    newPlusPizzas.thisPizzas = [...newPlusPizzas.thisPizzas, newPlusPizza]
    newPlusPizzas.thisAllPrice += newPlusPizza.price
  }

  minusPizza = (path: string) => {
    const [id, type, size] = path.split('-')
    
    const newMinusPizzas: IThisPizzasTypes = this.cart[id][type][size]
    newMinusPizzas.thisAllCount--
    newMinusPizzas.thisAllPrice -= newMinusPizzas.thisPizzas[0].price
    newMinusPizzas.thisPizzas.pop()

    if (!newMinusPizzas.thisPizzas.length) delete this.cart[id][type][size]
    if (!Object.values(this.cart[id][type]).length) delete this.cart[id][type]
    if (!Object.values(this.cart[id]).length) delete this.cart[id]
  }

  payPizzas = () => {
    alert('Ты почти оплатил свою пиццу. Зайди в консоль, чтобы посмотреть что ты заказал')
    console.log('Твоя пицца', JSON.parse(JSON.stringify(this.cart)))
  }

  getTotalPrice = <T>(arr: T[]): number => {
    return arr.reduce((acc: number, pizza: any): number => acc += pizza.price, 0)
  }

  getCount = (id: string) => {
    return this.cart[id] && flatObject<CartPizzasTypes, any>(this.cart[id], 3).length
  }

  get cart() {
    return this._cart
  }

  set cart(cartPizzas) {
    this._cart = cartPizzas
  }

  get allPizzas() {
    return flatObject<IThisPizzasTypes, CartPizzasTypes>(this.cart, 2).flatMap(({ thisPizzas }) => thisPizzas)
  }

  get totalPrice() {
    return this.getTotalPrice(this.allPizzas)
  }

  get totalCount() {
    return this.allPizzas.length
  }

}


export default new CartStore()
