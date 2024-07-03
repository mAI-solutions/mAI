import {
  TextInput,
  PasswordInput,
  Stack,
  Image,
  Center,
  Button,
  LoadingOverlay
} from '@mantine/core'

import { useDisclosure } from '@mantine/hooks'
import { useForm } from '@mantine/form'

import useLogin from '../../store/useLogin'

import logo from '../../assets/logo.svg'

const Login = () => {
  const { login } = useLogin()
  const [loading, { open, close }] = useDisclosure(false)

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { username: '', password: '' },
  })

  return (
    <>
      <Stack gap={30} w='75%'>
        <Center m={10}>
          <Image 
            src={logo} 
            alt="Logo de la aplicación" 
            w={200}
          />
        </Center>

        <form
          onSubmit={form.onSubmit(async (credentials) => {
            open()
            const { error } = await login(credentials)
            close()
            if (!error) {
              return
            }
            if (error.data.code === 400) {
              form.setFieldError('username', 'Usuario o contraseña incorrectos')
              return
            }
            form.setFieldError('username', 'Ha ocurrido un error inesperado')
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
      <LoadingOverlay
        visible={loading}
        zIndex={1000}
        overlayProps={{ 
          blur: 2 
        }} 
      />
    </>
  )
}

export default Login