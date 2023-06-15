export default function Collection (props){
    return (
        <div className="collection">
        <div className="collection-image">
            <img className="landscape" src={props.image}/>
            <img className="potrait" src={props.potrait}/>
        </div>
                <h2>{props.title}</h2>
        </div>
    )
}