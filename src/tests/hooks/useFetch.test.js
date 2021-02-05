import { renderHook } from "@testing-library/react-hooks"
import { useFetch } from '../../hooks/useFetch'

describe('Pruebas en useFetch', ()  => {
    test('debe retornar la informacion por defecto', () => {
        const { result } = renderHook(()=> useFetch('https://breakingbadapi.com/api/quotes/1'))
        const {data, loading, error} = result.current

        expect(data).toBe(null)
        expect(loading).toBe(true)
        expect(error).toBe(null)
    })
    test('Debe de tener la info deseada, loading false, error false', async () => {
       const { result, waitForNextUpdate} = renderHook(()=> useFetch('https://breakingbadapi.com/api/quotes/1'))
       await waitForNextUpdate({timeout:5000});

       const {data, loading, error} = result.current

    //    console.log(data.lenght)

       expect(data.length).toBe(1)
       expect(loading).toBe(false)
       expect(error).toBe(null)
    })
    test('Debe de mostrar error si no se puede cargar la api', async () => {
       const { result, waitForNextUpdate} = renderHook(()=> useFetch('https://breakingbadapi.com/api/quotes/1/msmsms'))
       await waitForNextUpdate({timeout:5000});

       const {data, loading, error} = result.current

    //    console.log(data.lenght)

       expect(data).toBe(null)
       expect(loading).toBe(false)
       expect(error).toBe('no se pudo cargar la info')
    })
    
    
})
