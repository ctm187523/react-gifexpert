import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas en getGifs', () => {

    test('debe de retornar un arreglo de gifs', async() => {

        const gifs = await getGifs('One Punch');
        //console.log(gifs)
        //provamos que devuelva mas de un elemento
        expect( gifs.length ).toBeGreaterThan( 0 );

        //evaluamos que tenga la misma estructura del objeto que tenemos que recibir
        //sera en los atributos cualquier atriubuto(any) que sea String
        expect ( gifs[0] ).toEqual({

            id: expect.any( String ),
            title: expect.any ( String ),
            url: expect.any ( String )
        });
    });
    
    
});
