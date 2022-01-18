import './style.css';
import logoLinkedin from '../../imagenes/linkedin.png'

export default function Header() {
    return (
        <header className='menu'>
            <div className='datosContacto'>
                <a href="https://www.linkedin.com/in/martín-alfredo-yela"><img className='linkedin' src={logoLinkedin} alt="logo linkedin" /></a>
                <p>692580956</p>
            </div>
            <div className='menu_grande'>
                <a href='#me'>SOBRE MI</a>
                <a href='#formacion'>FORMACION</a>
                <a href='#proyectos'>PROYECTOS</a>
            </div>
            <nav className='boton'>
                <input type="checkbox" id="menu"/>
                    <label for="menu"> ☰ </label>
                    <ul>
                        <li>SOBRE MI</li>
                        <li>FORMACION</li>
                        <li>PROYECTOS</li>
                    </ul>
            </nav>

        </header>
    )
}