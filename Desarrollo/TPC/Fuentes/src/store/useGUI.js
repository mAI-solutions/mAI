import { create } from 'zustand'
import modules from '../modules'

const getRouteOf = (path) => path.reduce((obj, key) => obj.options[key], modules)

const useGUIData = create((set) => ({
  currentRoute: {
    path: ['noticias'],
    route: getRouteOf(['noticias']),
  },
  setCurrentRoute: (path) => {
    // console.log(getRouteOf(path))
    set({
      currentRoute: {
        path,
        route: getRouteOf(path), 
      }
    })
  },
}))

export default useGUIData