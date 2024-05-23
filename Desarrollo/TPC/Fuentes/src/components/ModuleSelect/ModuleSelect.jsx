import { useState } from 'react'
import { Group, Stack, UnstyledButton, Menu } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react';
import data from '../../assets/data/modules'
import classes from './ModuleSelect.module.css'

// const renderAutocompleteOption = ({ option }) => {
//   const { Icon, label, desc } = modules[option.value]
//   return (
//     <Group className={classes.option}>
//       <Icon size={20} />
//       <Stack gap={1} justify="center">
//         {label}
//         <div style={{ fontSize: 12, color: '#666' }}>
//           {desc}
//         </div>
//       </Stack>
//     </Group>
//   )
// }

// const ModuleSelect = ({ value, onChange }) => {
//   return (
//     <div className={main}>
//       <Select
//         width={100}
//         value={value}
//         onChange={onChange}
//         data={[
//           { value: 'noticias', label: 'Feed de noticias' },
//           { value: 'redaccion', label: 'Asistente de redacción' },
//           { value: 'acciones', label: 'Acciones cíclicas' }
//         ]}
//         renderOption={renderAutocompleteOption}
//       />
//     </div>
//   )
// }

const ModuleSelect = ({ selected, setSelected }) => {
  const [opened, setOpened] = useState(false)
  const [hovered, setHovered] = useState(null)

  const items = data.map((item) => (
    <Menu.Item
      leftSection={<item.Icon size={20} />}
      onClick={() => setSelected(item)}
      key={item.value}
    >
      <Stack gap={1} justify="center" style={{ marginLeft: '5px' }}>
        {item.label}
        <div style={{ fontSize: 12, color: '#666' }}>
          {item.desc}
        </div>
      </Stack>
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton 
          onMouseEnter={() => setHovered(true)} 
          onMouseLeave={() => setHovered(false)}
          style={{ width: '100%' }} 
          data-expanded={opened || undefined}
        >
          
            <div className={classes.control}>
              <Group gap="xs" className={classes.selected}>
                <selected.Icon size={20} />
                <span className={classes.label}>{selected.label}</span>
              </Group>
              <IconChevronDown width="15px" className={classes.icon} stroke={1.5} />
            </div>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        {items}
      </Menu.Dropdown>
    </Menu>
  );
}

export default ModuleSelect