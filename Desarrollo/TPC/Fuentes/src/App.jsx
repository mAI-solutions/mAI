import logo from '../public/img/logo.svg'
import { useState } from 'react'
import useData from './hooks/useData'
import ModuleSelect from './components/ModuleSelect'
import ModuleSwitch from './components/ModuleSwitch'
import './App.css'

const App = () => {
  const { defaultModule } = useData()
  const [selected, setSelected] = useState(defaultModule)

  return (
    <div className='app'>
      <div className='header'>
        <img src={logo} className='logo' alt='logo de TPC' />
      </div>

      <ModuleSelect
        selected={selected}
        setSelected={setSelected}
      />
      
      <div className='content'>
        <ModuleSwitch value={selected.value} />
      </div>
    </div>
  )
}

export default App
