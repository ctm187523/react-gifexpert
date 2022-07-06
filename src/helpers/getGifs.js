//creamos la funcion para buscar los gifs fuera del funcional component, en un archivo a parte porque cada vez que la funcion se vuelva 
//a renderizar se volveria a cargar todo, la peticion http, si la funcion esta dentro 
export const getGifs = async (category) => {

    //en Postam hemos creado la url con la url del sitio giphy, el api key nuestro, la categoria a buscar y el limite de respuestas que hemos puesto en 10
    const url = `https://api.giphy.com/v1/gifs/search?key=0BfHl9sMHJiI4LDlien8Fc7U50vAIjaZ&q=${ category }&limit=10`   
    const resp = await fetch( url ); //usamos fetch para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas.
    const { data=[] } = await resp.json(); //desestructuramos para seleccionar data(visto en postman) del json lo ponemos como un array

    //recorremos el array data con el json y retornamos un objeto con el id, title y la url del gif con los datos recibidos
    const gifs = data.map( img => ({
    
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }));

    return gifs;
}