import { todoReducer } from "../../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../../fixtures/demoTodos"


describe('pruebas en <todoTeducer/>', () => {

    test('debe de regresar el estado por defecto', () => {
        
        const state = todoReducer( demoTodos, {} )
        expect( state ).toEqual( demoTodos )

    })
    test('debe de agregar un todo', () => {

        const newTodo = {
            id: 3,
            desc: 'Aprender Angular',
            done: false
        }

        const state = todoReducer(demoTodos, {
            type: 'add',
            payload: newTodo
        })

        expect( state ).toEqual( [...demoTodos, newTodo] )

    });

    test('debe de borrar un TODO', () => {

        const todoId = {
               id: 1
            }

        const state = todoReducer( demoTodos, {
            type: 'delete',
            payload: todoId.id
        })

        console.log(state)

        expect( state.length ).toBe(1)
        expect( state.find( toDo => toDo.id === todoId.id) ).toBe(undefined)
        expect( state ).toEqual([ demoTodos[1] ])

    });

    test('debe de hacer el Toogle del TODO', () => {


        const state = todoReducer( demoTodos, {
            type: 'toogle',
            payload: 1
        })
        

        expect( state[0].done ).toBe(true)
        expect( state[1] ).toEqual( demoTodos[1] )

    });
    
})
