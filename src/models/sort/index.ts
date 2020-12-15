import { createEvent } from 'effector'

import { $sortBy } from '../states'

export const setSortBy = createEvent<string>()

$sortBy
  .on(setSortBy, (state, payload) => payload)


