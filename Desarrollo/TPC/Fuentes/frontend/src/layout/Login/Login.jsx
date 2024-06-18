import {
  TextInput,
  PasswordInput,
  Anchor,
  Text,
  Stack,
  Image,
  Center,
  Button,
} from '@mantine/core'

import logo from '../../assets/logo.svg'

const Login = () => {
  return (
    <Stack gap={30} w='75%'>
      <Center m={10}>
        <Image 
          src={logo} 
          alt="Logo de la aplicación" 
          w={200}
        />
      </Center>

      <Stack gap={8}>
        <TextInput
          label="Usuario o email"
          placeholder="rodrigo.alva@unmsm.edu.pe"
          type='email'
          required
        />
        <PasswordInput
          label="Contraseña"
          placeholder="Tu contraseña"
          required
        />
      </Stack>

      <Stack
        gap={8}
      >
        <Button
          variant='default' 
          fullWidth
          type='submit'
        >
          Iniciar sesión
        </Button>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          ¿Aún no tienes cuenta? {' '}
          <Anchor size="sm" component="button">
            Regístrate
          </Anchor>
        </Text>
      </Stack>
    </Stack>
  )
}

export default Login