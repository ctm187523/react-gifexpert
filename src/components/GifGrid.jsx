import { useState, useEffect } from "react"
import { GifItem } from "./GifItem";
import { getGifs } from "../helpers/getGifs"
import { useFetchGifs } from "../hooks/useFetchGifs";



//funcional component
export const GifGrid = ({ category }) => {

    /*

    COMENTAMOS TODO ESTE CODIGO PORQUE ABAJO CREAREMOS UN CUSTOM HOOK CREADO POR NOSOTROS
    PARA MANEJAR TODO LO COEMENTADO

    //usamos el Hook useState para manejar las imagenes
    const [images, setimages] = useState([]);

    //funcion asincrona ya que recibimos una promesa, dentro del Hook useEffect
    //no podemos usar async por eso lo hacemos con una funcion aparte
    //para setear las imagenes y introducirlas en el Hook useState
    const getImages = async () => {

        const newImages = await getGifs(category);  //usamos el metodo del archivo getGifs.js para recibir los gifs seleccionados
        setimages(newImages);
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
        console.log(images)

    }, []);

   */

   //llamamos al Hook creado en el archivo useFetchGifs.js
   const { images, isLoading } = useFetchGifs( category );
  
    return (
        <>
            
            <h3>{category}</h3>
            {/* usamos un ternario para crear una condicion de que si la variable
            isLoading es True renderize un h2 que ponga cargando en caso contrario
            es null para que no se renderize */}
            
            {
                isLoading
                ? ( <h2>Cargando ...</h2>)
                : null

                // podriamos usar tambien
                // isLoading && ( <h2>Cargando ...</h2>)
                // ya que no hay else
            }
            

            {/* className es sinonimo de class en html lo hace asi React para no confundir 
            le decimos al div que contenga la clase card-grid que esta configurada en el archivo styles.css
            para darle estilo al div*/}
            <div className="card-grid">
                {
                    // desestructuramos el objeto recibido
                    images.map( ( image )  => (
                        //utilizamos el componente GifItem
                        <GifItem
                            key={image.id}
                            // lo hacemos de otra manera para manejar las props
                            // title={ image.title }  
                            // url={ image.url }

                            //esparcimos todas las propiedades del image con un spread y no tenemos que poner cada una como arriba
                            {...image}

                        />

                    ))
                }

            </div>
        </>
    )
}
