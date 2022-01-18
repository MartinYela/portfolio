import CardProject from "../cardProject/cardProject";
import './style.css';
import projectTiempo from '../../imagenes/tiempoOk.png';
import projectHTML from '../../imagenes/Landing.png';
import projectTetris from '../../imagenes/tetris2.png';
import projectKanban from '../../imagenes/kanbas.png'
import { Fragment } from "react";

const textoProyectos = [
    {
        "appTiempo" : "Proyecto realizado en conjunto con alumnos de IX UI. Aprendimos a utilizar paletas de componentes (material ui) y solidificamos conocimientos de React y llamadas a API. Es una versión móvil",
        "enlace" : "https://martinyela.github.io/tiempo-app/"
    },
    {
        "html-css" : "Primer proyecto del bootcamp, realizado utilizando solamente HTML5 y CSS3",
        "enlace" : "https://martinyela.github.io/proyecto-html-css/index.html"
    },
    {
        "tetris" : "Proyecto muy divertido del famoso juego del tetris. Práctica realizada con Javascript, y la vista con HTML5 y CSS3",
        "enlace" : "https://martinyela.github.io/tetris/"
    },
    {
        "kanban" : "Tablero Kanban. Fue mi primera práctica con React, donde afirme conocimientos de uso del estado y contexto global",
        "enlace" : "https://martinyela.github.io/kanbas/"
    },
]

export default function Projects() {
    return (
        <Fragment>
            <h1 className="title" id='proyectos'>Proyectos</h1>
            <div className="project_container">
                <CardProject imagen={projectHTML} texto={textoProyectos[1]["html-css"]} web={textoProyectos[1].enlace}></CardProject>
                <CardProject imagen={projectTetris} texto={textoProyectos[2].tetris}  web={textoProyectos[2].enlace}></CardProject>
                <CardProject imagen={projectKanban} texto={textoProyectos[3].kanban}  web={textoProyectos[3].enlace}></CardProject>
                <CardProject imagen={projectTiempo} texto={textoProyectos[0].appTiempo} web={textoProyectos[0].enlace}></CardProject>
            </div>
        </Fragment>
    )
}