import { useFetchGifs } from "../../src/hooks/useFetchGifs"
import { renderHook, waitFor } from '@testing-library/react'

describe('pruebas en el Hook  useFetchGifs', () => {

    test('debe de regresar el estado inicial', () => {

        //el estado inicial es el arreglo de imagenes vacio y el isLoading en true


        //usamos renderHook para usar el Hook,mandondele por parametro la categoria
        //lo desestructuramos el renderHook
        const { result } = renderHook(() => useFetchGifs('One Puch'));

        //desestrucutramos el result obtenido arriba para obtener las images i el isLoading
        const { images, isLoading } = result.current;

        //probamos que el arreglo este vacio con la longitud del array debe de ser cero
        expect(images.length).toBe(0);
        //probamos que isLoading sea true
        expect(isLoading).toBeTruthy();

    });

    test('debe de retornar un arreglo de imagenes y el isLoading en true', async() => {

        const { result } = renderHook(() => useFetchGifs('One Puch'));

        //debemos evaluar una vez se carguen las imagenes y isLoading pase a ser false
        //usamos la promesa waitFor, le decimos que espere hasta que obtenga las imagenes
        await waitFor(
            //creamos una funcion con un expect que evalue que el arreglo es mayor que cero, contine imagenes
            () => expect(result.current.images.length).toBeGreaterThan(0),
        );


        //desestrucutramos el result linea 27 obtenido arriba para obtener las images i el isLoading
        const { images, isLoading } = result.current;

        //probamos que el arreglo no este vacio 
        expect(images.length).toBeGreaterThan(0);
        //probamos que isLoading sea false
        expect(isLoading).toBeFalsy();


    })



})
