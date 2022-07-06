import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('Pruebas en AddCategory', () => {

    test('debe de cambiar el valor de la caja de texto', () => {

        //mandamos de prop una funcion cualquiera que es lo que pide
        render(<AddCategory onNewCategory={() => { }} />);

        //disparamos el evento onChange para simular que el usuario introduce algo
        const entrada = screen.getByRole('textbox'); //buscamos el input que es un textbox
        fireEvent.input(entrada, { target: { value: 'Saitama' } }); //disparamos el evento y en target.value introducimos lo que pondria el usuario

        expect(entrada.value).toBe('Saitama');

        screen.debug();
    });

    test('debe de llamar onNewCategory si el imput tiene un valor', () => {

        const inputValue = 'Saitama'
        const onNewCategory = jest.fn(); // usamos el Mock(simulacion de la funcion) de jest fn() para probar al funcion
        // TODO: ????

        //pasamos al como prop la funcion de prueba creada arriba linea 23
        render(<AddCategory onNewCategory={ onNewCategory } />);

        //obtenemos el input y el formulario
        const entrada = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(entrada, { target: { value: inputValue } }); //disparamos el evento y en target.value introducimos lo que pondria el usuario

        //disparamos el submit del formulario/cuando el usuario da al enter
        fireEvent.submit(form);
       
       
        //al hacer el submit la caja vuelve a estar vacia evaluamos que sea cierto
        expect(entrada.value).toBe('');

        //debemos evaluar la funcion que recibimos por parametro
        expect( onNewCategory ).toHaveBeenCalled(); //evaluamos que esta funcion haya sido llamada
        expect( onNewCategory ).toHaveBeenCalledTimes(1); //evaluamos que esta funcion haya sido llamada solo una vez
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue ); //evaluamos que esta funcion haya sido llamada con el valor indicado en la variable inputValue linea 22
    });

    test('no debe de llamar al onNewCategory si el input esta vacio ', () => {

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />);

         //obtenemos el input y el formulario
         const form = screen.getByRole('form');

        fireEvent.submit(form);
        
        //al pasarle un valor vacio no debe de llamar a la funcion
        expect( onNewCategory ).toHaveBeenCalledTimes(0);

        //tambien podemos comprobarlo de esta manera
        expect( onNewCategory ).not.toHaveBeenCalled();
 
    })

});
