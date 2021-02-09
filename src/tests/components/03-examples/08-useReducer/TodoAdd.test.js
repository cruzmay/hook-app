import { shallow } from 'enzyme';
import React from 'react';
import { TodoAdd } from "../../../../components/08-useReducer/TodoAdd"

describe('pruebas en <TodoAdd/>', () => {

    const handleAddToDo = jest.fn()

    const wrapper = shallow(
            <TodoAdd 
            handleAddToDo = { handleAddToDo }
            />
        )

    test('debe de mostrarse correctamente', () => {
         expect(wrapper).toMatchSnapshot()
    })
    test('No debe de llamar handleAddToDo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit')
        formSubmit({preventDefault(){}})
        expect(handleAddToDo).toHaveBeenCalledTimes(0)
    })
    test('debe de llamar la funcion handleAddToDo', () => {
        //con un argumento/called
        const value = 'Hacer la tarea'
        const input = wrapper.find('input')
        input.simulate('change', { target:{ value, name : 'description'  } })
        console.log(input.props())
        wrapper.find('button').simulate('click')
        const form = wrapper.find('form')
        form.simulate('submit', {preventDefault: ()=>{}} )

        expect(handleAddToDo).toHaveBeenCalledTimes(1)
        expect(handleAddToDo).toHaveBeenCalledWith(expect.any(Object))
        expect(handleAddToDo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false 
        })
        expect(wrapper.find('input').prop('value')).toBe('')
    })
    
    
})
