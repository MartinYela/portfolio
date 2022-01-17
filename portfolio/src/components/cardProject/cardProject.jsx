import './style.css';

export default function CardProject(props) {
    const style = {
        'backgroundImage': `url(${props.imagen})`,
        'backgroundSize': 'cover'
    }
    return (
        <div className='cardBox'>
            <div className='card'>
                <div className='front' style={style}>
                </div>
                <div className='back'>
                    <p className='text'>{props.texto}</p>
                    <a className='enlace' href={props.web}>Ir al proyecto</a>
                </div>
            </div>
        </div>
    )
}