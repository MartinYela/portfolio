import './style.css';

export default function CardProject(props){
    return(
        <div className='card_container'>
            <img className='imgProject' src={props.imagen} alt="imagen del proyecto" />
        </div>
    )
}