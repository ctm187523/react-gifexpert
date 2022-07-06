import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//le decimos que haga un mock compeleto de este path
//definicion mock: Las simulaciones mock manuales son usadas para sustituir funcionalidad con datos falsos. 
jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en GifGrid', () => {

    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => {

        //decimos como va a funcionar el hook useFetchGifs, simulamos el valor que retorna
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });


        render(<GifGrid category={category} />);

        //como en la simulacion del hook linea 16 hemos puesto que esta en true
        //debe de pasar el expect y encontrar el texto Cargando... si ponemos false
        //al no mostrarse el Cargando... daria error, en false daria bien si comentamos la linea de abajo
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

    });

    test('debe de mostrar items cuando se cargan las imagnes mediante useFetchGifs', () => {

        //nos inventamos los valores de objetos img para evaluarlo luego en el Hook useFetchGifs
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },

            {
                id: '123',
                title: 'Super Lopez',
                url: 'https://localhost/superLopez.jpg'
            }
        ]


        //decimos como va a funcionar el hook useFetchGifs, simulamos el valor que retorna usando
        //los objetos img creados arriba como ya hemos recibido las imagenes isLoading pasa a false
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);

       // screen.debug();

       //hacemos la prueba diciendo que debemos recibir 2 imagenes
       expect( screen.getAllByRole('img').length).toBe(2)

    });



})
