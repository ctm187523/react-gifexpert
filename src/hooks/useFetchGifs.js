
import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"

//creamos un Hook que no es mas que una funcion que retorna algo
export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    //usamos otro useState para controlar la carga de las imagenes(su estado), de inio en true que es cuando las esa cargando
    const [isLoading, setLoading] = useState( true );

    //funcion asincrona ya que recibimos una promesa, dentro del Hook useEffect
    //no podemos usar async por eso lo hacemos con una funcion aparte
    //para setear las imagenes y introducirlas en el Hook useState
    const getImages = async () => {

        const newImages = await getGifs(category);  //usamos el metodo del archivo getGifs.js para recibir los gifs seleccionados
        setImages(newImages);
        setLoading(false); //cargadas las imagenes lo ponemos en false
    }

    //usamos el Hook useEffect que es para disparar efectos secundarios, procesos que queramos ejecutar cuando algo suceda
    //solo queremos que se ejecute la peticion http(llamando a getGifs) cuando se carga por primera vez, para que no se repita cada vez
    //que se renderiza la pantalla
    //como primer parametro del Hook useEffect ponemos la funcion que queremos ejecutar
    //como segundo parametro ponemos un array de mis dependencias, si ponemos las dependencias vacias(array vacio)
    //el hook solo se disparara la primera vez que se crea el componente
    useEffect(() => {

        //hacemos una llamda al método creado arriba getImages()
        getImages();
       
    }, []);


    //retornamos las propiedades que pide el Hook creamos por nosotros las images y el estado
    //isLoading que de inicio es true ya que al cargar las imagenes tiene que ser true
    return {

        images: images,
        isLoading: isLoading


    }
        
    
}
