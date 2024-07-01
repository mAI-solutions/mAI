import Acciones from '../../modules/Acciones'
import Noticias from '../../modules/Noticias'
import Redaccion from '../../modules/Redaccion'

const ModuleSwitch = ({ value }) => {
  switch (value) {
    case 'noticias':
      return <Noticias />
    case 'redaccion':
      return <Redaccion />
    case 'acciones':
      return <Acciones />
    default:
      return null
  }
}

export default ModuleSwitch