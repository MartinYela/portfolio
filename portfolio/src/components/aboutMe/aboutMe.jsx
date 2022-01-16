import './style.css';
import myPicture from '../../imagenes/fotoPerfil.jpg'

export default function AboutMe() {
    return (
        <div>
            <h1 className='me' id='me'>Martín Alfredo Yela</h1>
            <p className='profession'>Desarrollador Full Stack Junior</p>
            <div className='container_aboutMe'>
                <img className='myPicture' src={myPicture} alt="foto postulante" />
                <p className='descriptionAboutMe'>Después de varios años en otro sector, he decidido dar el salto a las nuevas tecnologías, formándome como programador, y ahora me encuentro buscando una empresa que me permita demostrar mis habilidades, y a la vez seguir aprendiendo y mejorando para poder aportar al equipo cada vez más valor. Me considero una persona resolutiva, con gran capacidad de trabajo en equipo y adaptabilidad a los cambios. Tengo mucha ambición por seguir aprendiendo y mejorar.</p>
            </div>
        </div>
    )
}