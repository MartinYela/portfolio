import CardProject from "../cardProject/cardProject";
import './style.css';
import projectTiempo from '../../imagenes/tiempoOk.png';
import projectHTML from '../../imagenes/Landing.png';
import projectTetris from '../../imagenes/tetris2.png';
import projectKanban from '../../imagenes/kanbas.png'
import projectMarvel from '../../imagenes/marvel.png'
import { Fragment } from "react";

const textoProyectos = [
    {
        "marvel": "Personajes de marvel estudios. Proyecto de consumo de API-REST",
        "enlace": "https://martinyela.github.io/marvelCard/"
    },
    {
        "kanban": "Tablero Kanban. Fue mi primer proyecto con React, donde afirme conocimientos de uso del estado y contexto global",
        "enlace": "https://martinyela.github.io/kanbas/"
    },
    {
        "html-css": "Primer proyecto, realizado utilizando solamente HTML5 y CSS3",
        "enlace": "https://martinyela.github.io/proyecto-html-css/index.html"
    },
    {
        "tetris": "Proyecto muy divertido del famoso juego del tetris. Práctica realizada con Javascript, y la vista sencilla pero retro, con HTML5 y CSS3",
        "enlace": "https://martinyela.github.io/tetris/"
    },
    {
        "appTiempo": "Proyecto realizado en conjunto con alumnos de IX UI. Aprendimos a utilizar paletas de componentes (material ui) y solidificamos conocimientos de React y llamadas a API. Es una versión móvil",
        "enlace": "https://martinyela.github.io/tiempo-app/"
    },
]

export default function Projects() {
    return (
        <Fragment>
            <h1 className="title" id='proyectos'>Proyectos</h1>
            <div className="project_container">
                <CardProject imagen={projectMarvel} texto={textoProyectos[0].marvel} web={textoProyectos[0].enlace}></CardProject>
                <CardProject imagen={projectKanban} texto={textoProyectos[1].kanban} web={textoProyectos[1].enlace}></CardProject>
                <CardProject imagen={projectHTML} texto={textoProyectos[2]["html-css"]} web={textoProyectos[2].enlace}></CardProject>
                <CardProject imagen={projectTetris} texto={textoProyectos[3].tetris} web={textoProyectos[3].enlace}></CardProject>
                <CardProject imagen={projectTiempo} texto={textoProyectos[4].appTiempo} web={textoProyectos[4].enlace}></CardProject>
            </div>
        </Fragment>
    )
}