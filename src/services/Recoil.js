import { atom } from 'recoil'
// Utils
import { HEMISPHERES, FILTERS_FUNC } from '../utils'

const hemisphere = atom({
  key: 'hemisphere', 
  default: HEMISPHERES.North, 
});

const filters = atom({
  key: 'filters', 
  default: FILTERS_FUNC.now, 
});

export {
  hemisphere,
  filters
}

