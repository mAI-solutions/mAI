import { Select, Group } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'

const iconProps = {
  stroke: 1.5,
  color: 'currentColor',
  opacity: 0.6,
  size: 18,
};

const BetterSelect = ({ label, data, values, value, onChange }) => {
  const renderSelectOption = ({ option, checked }) => {
    const { desc, Icon } = data[option.value]
    return (
      <Group flex={1}>
        <Group gap="xs">
          <Icon style={{ marginInlineEnd: 'auto' }} {...iconProps} />
          <div>
            <div>{option.label}</div>
            <div style={{ fontSize: '0.8em', opacity: 0.6 }}>{desc}</div>
          </div>
        </Group>
        {checked && <IconCheck style={{ marginInlineStart: 'auto' }} {...iconProps} />}
      </Group>
    )
  }

  return (
    <Select 
      label={label}
      data={values}
      renderOption={renderSelectOption}
      value={value}
      onChange={onChange}
      allowDeselect={false}
    />
  )
}

export default BetterSelect