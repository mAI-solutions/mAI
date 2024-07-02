// useGUIData.test.js
import { renderHook } from '@testing-library/react-hooks';
import useGUIData from './useGUIData';
import modules from '../modules'; // Asegúrate de que `modules` esté definido correctamente

describe('useGUIData', () => {
    test('inicia con la ruta correcta', () => {
        const { result } = renderHook(() => useGUIData());
        expect(result.current.currentRoute.path).toEqual(['noticias']);
        expect(result.current.currentRoute.route).toEqual(modules.children.noticias);
    });

    test('actualiza la ruta correctamente', () => {
        const { result } = renderHook(() => useGUIData());
        const newPath = ['sobre-nosotros'];
        result.current.setCurrentRoute(newPath);
        expect(result.current.currentRoute.path).toEqual(newPath);
        expect(result.current.currentRoute.route).toEqual(modules.children.sobre_nosotros);
    });
});