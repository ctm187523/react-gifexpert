
import { useState } from 'react'

/*

COMENTAMOS LAS DOS IMPORTACIONES DE ABAJO PARA USAR EL ARCHIVO DE BARRIL
CREADO EN LA CARPETA components LLAMADO index.js N
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

*/

//no hace falta hacer referencia al archivo de barril index.js lo busca automaticamente
// react y importa los archivos pedidos de el
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    //almcenamos información que tendra que cambiar el html
    //usamos el Hook useState para mantener el estado
    //como valor inicial ponemos un arreglo con la categoria OnePuch por ejemplo
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        //no usamos aqui push porque el push muta los objetos, no queremos mutar el estado debemos de 
        //crear un nuevo estado, un nuevo arreglo, usamos el setCategories
        //categories.push(newcategory);

        //usamos el setCategories para crear un nuevo arreglo usamos el spread(...) para crear una copia haciendo uan desestructuracion de las categorias
        //del arreglo categories y añadimos la nueva categoria que sera Valorant
        //setCategories ( [ ...categories, 'Valorant' ]);

        //le ponemos el if para que incluya la categoria siempre que no exista en el array, si existe sale del metodo y no lo añade
        if (categories.includes(newCategory)) return;
        //podemos poner el nuevo elemento a añadir al inicio y luego hacer la desestructuracion de las categorias
        //añadimos a setCategories la nueva categoria que sera la recibida por el evento newCategory
        setCategories([newCategory, ...categories]);

        //otra manera de hacer lo anterior seria usando el callback del useSate
        //setCategories( cat => [...cat, 'Valorant']);




    }

    return (

        <>
            {/* título */}
            <h1>GifExpertApp</h1>

            {/* Input  */}
            {/* agregamos el component AddCategory y la propiedad setCategories del Hook useState que sera una funcion*/}
            <AddCategory
                //comentamos la linea de abajo donde le pasamos al hijo la funcion para hacerlo de otra manera
                //setCategories={setCategories}

                //le pasamos una funcion llamada onNewCategory como propierty y en ella la llamada a onAddCategory pasandole el evento como parametro
                //para que una vez recibido lo escrito a traves del componente AddCategory por el usuario se añada al array
                onNewCategory={(event) => { onAddCategory(event) }}

            />

            {/* Listado de  Gif */}
            {/* <button onClick={ onAddCategory }>Agregar</button> */}

            {/* iteramos las categorias com map y mediante la funcion flecha le pasamos al componente GifGrid.jsx el componente a tratar, le pasamos tambien un key que identifica al componente*/}
            {
                categories.map(category => (
                    <GifGrid key={category}
                        category={category}
                    />
                ))
            }
            {/* <li>ABC</li> */}

            {/* Gif Item  */}
        </>

    )
}
