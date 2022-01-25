import './style.css';
import AboutMe from '../../components/aboutMe/aboutMe';
import Projects from '../../components/projects/projects';
import Tecnologias from '../../components/tecnologias/tecnologias';
import { Fragment } from 'react';
import Training from '../../components/training/training';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

export default function Principal() {
    return (
        <Fragment>
            <div className='firstView'>
                <Header></Header>
                <AboutMe></AboutMe>
                <Tecnologias></Tecnologias>
            </div>
            <Training></Training>
            <Projects></Projects>
            <Footer></Footer>
        </Fragment>
    )
}