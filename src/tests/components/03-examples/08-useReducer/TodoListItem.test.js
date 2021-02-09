import React from 'react';
import { shallow } from "enzyme"
import { TodoListItem } from "../../../../components/08-useReducer/TodoListItem"
import { demoTodos } from '../../../fixtures/demoTodos';

describe('pruebas en <TodoListItem/>', () => {

    const handleDelete = jest.fn()
    const handleToogle = jest.fn()

    const wrapper = shallow(<TodoListItem
            id={demoTodos[1].id}
            desc={demoTodos[1].desc}
            done={false}
            key={demoTodos[1].id}
            handleDelete={handleDelete}
            handleToogle={handleToogle}
            index={1}
        />)

    test('debe de mostrarse correctamente', () => {
      //snapshot  
        expect(wrapper).toMatchSnapshot()
    })
    test('debe de llamar la funcion handleDelete', () => {
        //jest.fn()
        wrapper.find('button').simulate('click')
        //toHaveBeenCalled
        expect(handleDelete).toHaveBeenCalled()
        //toHaveBeenCalledWith
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[1].id)
    })
    test('debe de llamar la funcion handleToggle', () => {
        //jest.fn()
        wrapper.find('.task').simulate('click')
        //toHaveBeenCalled
        expect(handleToogle).toHaveBeenCalled()
        //toHaveBeenCalledWith
        expect(handleToogle).toHaveBeenCalledWith(demoTodos[1].id)
    })
    test('debe de mostrar el texto correctamente', () => {
        //contenido del parrafo
        console.log(wrapper.find('p').text())
        expect(wrapper.find('p').text()).toBe(`${1 + 1}.- ${demoTodos[1].desc}`)
    })
    test('debe de marcarse el texto en handleToogle', () => {
        
        const wrapper = shallow(<TodoListItem done={true}/>)
        expect(wrapper.find('p').hasClass('tacha')).toBe(true)

    })
    
})
