import CardProject from "../cardProject/cardProject";
import './style.css';
import projectTiempo from '../../imagenes/app-tiempo.png';
import projectHTML from '../../imagenes/Landing.png';
import projectTetris from '../../imagenes/tetris.png'
import { Fragment } from "react";

export default function Projects() {
    return (
        <Fragment>
            <h1 className="title">Proyectos</h1>
            <div className="project_container">
                <CardProject imagen={projectTiempo}></CardProject>
                <CardProject imagen={projectHTML}></CardProject>
                <CardProject imagen={projectTetris}></CardProject>
            </div>
        </Fragment>
    )
}