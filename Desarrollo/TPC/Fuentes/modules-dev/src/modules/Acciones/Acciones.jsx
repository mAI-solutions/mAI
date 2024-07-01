import { useState } from 'react'
import { Select, Group } from '@mantine/core'
import { IconBellRinging, IconExternalLink, IconCheck } from '@tabler/icons-react'

const acciones = {
  'Notificación': {
    desc: 'Recibir recordatorios personalizados',
    Icon: IconBellRinging,
  },
  'Abrir enlace': {
    desc: 'Abrir enlace en una nueva pestaña',
    Icon: IconExternalLink,
  }
}

const iconProps = {
  stroke: 1.5,
  color: 'currentColor',
  opacity: 0.6,
  size: 18,
};

const renderSelectOption = ({ option, checked }) => {
  const { desc, Icon } = acciones[option.value]
  return (
    <Group flex={1}>
      <Group gap="xs">
        <Icon style={{ marginInlineEnd: 'auto' }} {...iconProps} />
        {/* {option.label} */}
        <div>
          <div>{option.label}</div>
          <div style={{ fontSize: '0.8em', opacity: 0.6 }}>{desc}</div>
        </div>
      </Group>
      {checked && <IconCheck style={{ marginInlineStart: 'auto' }} {...iconProps} />}
    </Group>
  )
}

const Acciones = () => {
  const [accion, setAccion] = useState('Notificación')

  return (
    <>
      <Select 
        label='Elige una acción'
        data={['Notificación', 'Abrir enlace']}
        renderOption={renderSelectOption}
        value={accion}
        onChange={setAccion}
      />
    </>
  )
}

export default Acciones