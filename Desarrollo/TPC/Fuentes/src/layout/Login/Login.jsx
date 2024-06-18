import {
  TextInput,
  PasswordInput,
  Stack,
  Image,
  Center,
  Button,
} from '@mantine/core'

import { useForm } from '@mantine/form'

import user from '../../services/user'

import logo from '../../assets/logo.svg'

const Login = () => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { username: '', password: '' },
  })

  return (
    <Stack gap={30} w='75%'>
      <Center m={10}>
        <Image 
          src={logo} 
          alt="Logo de la aplicación" 
          w={200}
        />
      </Center>

      <form
        onSubmit={form.onSubmit(async (values) => {
          await user.login(values.username, values.password)
        })}
      >
        <Stack gap={8}>
          <TextInput
            key={form.key('username')}
            label="Usuario o email"
            placeholder="rodrigo.alva@unmsm.edu.pe"
            required
            {...form.getInputProps('username')}
          />
          <PasswordInput
            key={form.key('password')}
            label="Contraseña"
            placeholder="Tu contraseña"
            required
            {...form.getInputProps('password')}
          />
          <Button
            variant='default' 
            fullWidth
            type='submit'
            mt={10}
          >
            Iniciar sesión
          </Button>
        </Stack>
      </form>
    </Stack>
  )
}

export default Login