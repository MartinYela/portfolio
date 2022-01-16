import './style.css';
import phyton from '../../imagenes/diploma-phyton2.png';
import java from '../../imagenes/diploma-java.png';
import neoland from '../../imagenes/MERN.jpg';

export default function Training() {
    return (
        <div >
            <h1 className='title_formacion' id='formacion'>Formación</h1>
            <div className='training_container'>
                <div className='formacion'>
                    <img className='diploma' src={neoland} alt="Bootcamp full stack" />
                    <div className='curso_description'>
                        <p >Bootcamp full stack</p>
                        <p>Duración: 480 horas</p>
                        <p>Finalizado: 23/12/21</p>
                    </div>
                </div>
                <div className='formacion'>
                    <img className='diploma' src={java} alt="curso de java" />
                    <div className='curso_description'>
                        <p >Curso de Java</p>
                        <p>Duración: 300 horas</p>
                        <p>Finalizado: 16/09/21</p>
                    </div>
                </div>
                <div className='formacion'>
                    <img className='diploma' src={phyton} alt="curso de phyton" />
                    <div className='curso_description'>
                        <p >Curso de Phyton</p>
                        <p>Duración: 100 horas</p>
                        <p>Finalizado: 12/11/20</p>
                    </div>
                </div>
            </div>
        </div>
    )
}