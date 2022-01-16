import './style.css';
import phyton from '../../imagenes/diploma-phyton2.png';
import java from '../../imagenes/diploma-java.png';
import neoland from '../../imagenes/neoland.jpg';

export default function Training() {
    return (
        <div >
            <h1 className='title'>Formación</h1>
            <div className='training_container'>
                <div className='formacion'>
                    <img className='diploma' src={phyton} alt="curso de phyton" />
                    <p >Curso de Phyton</p>
                </div>
                <div className='formacion'>
                    <img className='diploma' src={java} alt="curso de java" />
                    <p >Curso de Java</p>
                </div>
                <div className='formacion'>
                    <img className='diploma' src={neoland} alt="Bootcamp full stack" />
                    <p >Bootcamp full stack</p>
                </div>
            </div>
        </div>
    )
}