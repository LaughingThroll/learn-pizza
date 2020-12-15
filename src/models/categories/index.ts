import { createEvent } from 'effector'
import { $category } from '../states'
import { filterPayload } from '../../types'

export const setCategory = createEvent<filterPayload>()

$category
  .on(setCategory, (state, payload) => payload)
  



