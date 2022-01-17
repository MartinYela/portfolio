import './style.css';

export default function CardProject(props) {
    const style = {
        'background-image': `url(${props.imagen})`,
        'background-size': 'cover'
    }
    return (
        <div className='cardBox'>
            <div className='card'>
                <div className='front' style={style}>
                    {/* <img className='imgProject' src={} alt="imagen del proyecto" /> */}
                </div>
                <div className='back'>
                    <p className='text'>{props.texto}</p>
                    <a className='enlace' href={props.web}>Ir al proyecto</a>
                </div>
            </div>
        </div>
    )
}