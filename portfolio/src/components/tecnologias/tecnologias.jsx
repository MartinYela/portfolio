import { Fragment } from 'react';
import './style.css';
import logoJava from '../../imagenes/javaRecorte.png';
import logoJs from '../../imagenes/css3.png';
import logoHTML from '../../imagenes/html.png';
import logoNode from '../../imagenes/node.png';
import logoReact from '../../imagenes/react.png';
import logoMongo from '../../imagenes/mongo.png';
import logoMysql from '../../imagenes/mysql.png';
import logoGithub from '../../imagenes/github.png';
import logoPython from '../../imagenes/python.png';

export default function Tecnologias() {
    return(
        <Fragment>
            <h1 className="title_tecnologies">Tecnologías que manejo</h1>
            <div className='logos_container'>
                <img className='logo' src={logoJava} alt="logo java" />
                <img className='logo' src={logoJs} alt="logo javascript" />
                <img className='logo' src={logoHTML} alt="logo html5" />
                <img className='logo' src={logoNode} alt="logo node" />
                <img className='logo' src={logoReact} alt="logo react" />
                <img className='logo' src={logoMongo} alt="logo mongo" />
                <img className='logo' src={logoMysql} alt="logo mysql" />
                <img className='logo' src={logoGithub} alt="logo github" />
                <img className='logo' src={logoPython} alt="logo python" />
            </div>
        </Fragment>
    )
}