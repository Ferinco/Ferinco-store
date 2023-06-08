export default function Collection (props){
    return (
        <div className="collection">
        <div className="collection-image">
            <img src={props.image}/>
        </div>
        <div className="collection-title">
        <h2>{props.title}</h2>
        </div>
        </div>
    )
}