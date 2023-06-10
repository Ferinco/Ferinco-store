export default function Collection (props){
    return (
        <div className="collection">
        <div className="collection-image">
            <img src={props.image}/>
        </div>
                <h2>{props.title}</h2>
        </div>
    )
}