// user.test.js
import user from './user'
import pb from './pb' // Asegúrate de que 'pb' esté definido correctamente en tu test

// Para verificar si el usuario está autenticado, debes primero autenticar
beforeEach(async () => {
    // Ejemplo de credenciales de prueba
    const username = 'testuser';
    const password = 'testpassword';
    const response = await user.login(username, password);
    expect(response.user).toBeDefined();
});

test('login: debe retornar un usuario autenticado', async () => {
    const username = 'testuser';
    const password = 'testpassword';
    const response = await user.login(username, password);
    expect(response.user).toBeDefined();
    expect(response.user.username).toBe(username); // Asegúrate de que el usuario coincida
});

test('logout: debe eliminar al usuario almacenado', async () => {
    user.logout();
    const stored = user.storedUser();
    expect(stored).toBeNull(); // Asegúrate de que el usuario no está almacenado
});

test('storedUser: debe retornar el usuario almacenado', async () => {
    const stored = user.storedUser();
    expect(stored).toBeDefined();
    expect(stored.username).toBe('testuser'); // Asegúrate de que el usuario coincida
});