import { useState } from 'react';
import PropTypes from "prop-types";

//recibimos del padre en el input del archvio GifExpertApp las propiedades en este caso la funcion 'setCategories' modificado a onNewCategory
export const AddCategory = ({ onNewCategory }) => {

    //cada componente puede tener su propio estado, debemos manejar el estado del input
    //para manejar lo que escribe el usuario
    //usamos el Hook useState como valor inicial lo ponemos vacio
    const [inputValue, setInputValue] = useState('');

    //creamos una funcion para manejar las entradas, recibe un event del onChange linea 44
    //lo desestructuramos ya que contiene(event.target.value)
    const onInputChange = ({ target }) => {

        setInputValue(target.value);


    }

    const onSubmit = (event) => {

        event.preventDefault(); // con este metodo evitamos el  full refresh que por defecto que hace el form al pulsar enter
        //trim para eliminar los espacios adelante y atras, si se cumple que la entrada es igual o menor a 1 ponemos un retorn para salir de la funcion y asi no se manda ese valor
        if (inputValue.trim().length <= 1) return;

        //lo comentamos al hacer las modificaciones
        // setCategories(categories => [inputValue, ...categories]); // usamos como callback category todas las categorias anteriores, en el estado actual y luego insertamos el inputvalue con el valor recibido del usuario seguido de la desestructuracion de las categorias anteriores

        //le pasamos al property recibido del padre el valor introducido por el usuario para que ya en GifExpert.jsx lo añada al array
        onNewCategory(inputValue.trim());
        //console.log(inputValue); //al presionar enter imprimimos el valor de entrada del usuario

        setInputValue(''); //limpiamos el input para que desaparezca lo escrito al pulsar enter
    }

    return (
        // usamos el form y el input en su interior por defecto al presionar enter el form hace un full refresh
        //propaga el formulario, le pasa el evento a la funcion creada arriba on submit
        //el area-label="form" lo usamos para que luego en pruebas puede indentificar al formulario
        <form onSubmit={(event) => onSubmit(event)} aria-label="form"> {/*podriamos poner directamente onSubmit*/}
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}


AddCategory.propTypes = {

    onNewCategory: PropTypes.func.isRequired,
}
