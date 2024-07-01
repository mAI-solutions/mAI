import { create } from 'zustand'
import moduleData from '../assets/data/modules'

const useData = create(() => ({
  defaultModule: moduleData[0]
}))

export default useData