import React from 'react';
import { shallow } from "enzyme"
import { TodoListItem } from "../../../../components/08-useReducer/TodoListItem"

describe('pruebas en <TodoListItem/>', () => {

    const wrapper = shallow(<TodoListItem/>)


    test('debe de mostrarse correctamente', () => {
      //snapshot  

    })
    test('debe de llamar la funcion handleDelete', () => {
        //jest.fn()
        //toHaveBeenCalled
        //toHaveBeenCalledWith    
    })
    test('debe de llamar la funcion handleToggle', () => {
        //jest.fn()
        //toHaveBeenCalled
        //toHaveBeenCalledWith   
    })
    
    
    
})
