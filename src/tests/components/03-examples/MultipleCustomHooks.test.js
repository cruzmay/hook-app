import { shallow } from 'enzyme';
import React from 'react';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';

jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounter')

describe('haciendo pruebas en el componente <MultipleCustomHooks/>', () => {
    
    
    
    test('debe mostrarse correctamente ', () => {    

        useCounter.mockReturnValue({
        counter: 10,
        increment: () => {}
    })

        useFetch.mockReturnValue({
            data:  null,
            loading: true,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks/>)
        expect(wrapper).toMatchSnapshot()
    })
    test('debe de mostrar la informacion', () => {

        useCounter.mockReturnValue({
        counter: 10,
        increment: () => {}
    })
        
        useFetch.mockReturnValue({
            data:  [{
                author: 'fernando',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        })
        const wrapper = shallow(<MultipleCustomHooks/>)
        console.log(wrapper.html())
        expect(wrapper.find('.alert').exists()).toBe(false)
        expect(wrapper.find('.mb-3').text().trim()).toBe('Hola Mundo')
        expect(wrapper.find('footer').text().trim()).toBe('fernando')
        expect(wrapper).toMatchSnapshot()

    })
    
})
