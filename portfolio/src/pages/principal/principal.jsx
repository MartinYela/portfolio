import './style.css';
import AboutMe from '../../components/aboutMe/aboutMe';
import Projects from '../../components/projects/projects';
import Tecnologias from '../../components/tecnologias/tecnologias';
import { Fragment } from 'react';
import Training from '../../components/training/training';

export default function Principal() {
    return(
        <Fragment>
            <AboutMe></AboutMe>
            <Tecnologias></Tecnologias>
            <Training></Training>
            <Projects></Projects>
            
        </Fragment>
    )
}