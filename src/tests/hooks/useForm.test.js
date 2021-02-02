import { act, renderHook } from '@testing-library/react-hooks'
import { useForm } from '../../hooks/useForm'

describe('Haciendo pruebas sobre useForm', () => {
    
    const initialForm = {
        name: 'Pedro Cruz',
        email: 'pcruzmay@gmail.com'
    }

    test('debe de regresar un formulario por defecto', () => {
        const { result } = renderHook(()=> useForm(initialForm))
        // console.log(result.current)
        const [formState, handleInputChange, reset] = result.current

        expect(formState).toEqual(initialForm)
        expect(typeof handleInputChange).toEqual('function')
        expect(typeof reset).toEqual('function')

    })
    test('debe de cambiar el valor del formulario(cambiar name)', () => {
        const { result } = renderHook(()=> useForm(initialForm))
        const [, handleInputChange ] = result.current
        act(()=>{
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Batman'
                }
            })
        });
        const [formState] = result.current
        console.log(formState)
        expect(formState).toEqual({...initialForm, name:'Batman'})
       
    })
    test('debe de restablecer el formulario con RESET', () => {
       const { result } = renderHook(()=> useForm(initialForm))
        const [,handleInputChange, reset ] = result.current
        act(()=>{
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Batman'
                }
            })
            reset()
        });
        const [formState] = result.current
        console.log(formState)
        expect(formState).toEqual(initialForm) 
   
        
    })
})
