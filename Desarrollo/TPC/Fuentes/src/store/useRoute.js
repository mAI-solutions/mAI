import { create } from 'zustand'
import modules from '../modules'

const getRouteOf = (path) => path.reduce((obj, key) => obj.options[key], modules)

const useRoute = create((set) => ({
  currentRoute: {
    path: ['noticias'],
    route: getRouteOf(['noticias']),
  },
  setCurrentRoute: (path) => {
    set({
      currentRoute: {
        path,
        route: getRouteOf(path), 
      }
    })
  },
}))

export default useRoute