import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
//importamos la hoja de estilos
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  //comentamos el modo StrictMode ver video 82, se repite la peticion 2 veces en este modo lo hace React 
  //para asegurarse que todo va bien pero eso no afecta aproduccion
   <React.StrictMode>
    <GifExpertApp />
   </React.StrictMode>
);
