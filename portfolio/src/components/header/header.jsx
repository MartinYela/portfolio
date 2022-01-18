import './style.css';
import logoLinkedin from '../../imagenes/linkedin.png';
import curriculum from '../../imagenes/curriculum-MartinYela.pdf'

export default function Header() {
    return (
        <header className='menu'>
            <div className='datosContacto'>
                <a href="https://www.linkedin.com/in/martín-alfredo-yela"><img className='linkedin' src={logoLinkedin} alt="logo linkedin" /></a>
                <p>692580956</p>
            </div>
            <div className='menu_grande'>
                <a className='enlaces' href='#me'>SOBRE MI</a>
                <a className='enlaces' href='#formacion'>FORMACION</a>
                <a className='enlaces' href='#proyectos'>PROYECTOS</a>
                <a className='enlaces' target='_blank' rel='noopener noreferrer' href={curriculum}>CURRICULUM</a>
            </div>
            <nav className='boton'>
                <input type="checkbox" id="menu"/>
                    <label htmlFor="menu"> ☰ </label>
                    <ul>
                        <li><a className='enlaces_green' href='#me'>SOBRE MI</a></li>
                        <li><a className='enlaces_green' href='#formacion'>FORMACION</a></li>
                        <li><a className='enlaces_green' href='#proyectos'>PROYECTOS</a></li>
                        <li><a className='enlaces_green' target='_blank' rel='noopener noreferrer' href={curriculum}>CURRICULUM</a></li>
                    </ul>
            </nav>

        </header>
    )
}