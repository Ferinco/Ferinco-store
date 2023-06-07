export default function Item (props){
    return(
<div className="item">
    <div className="item-image">
    <img src={props.img}/>
    </div>
    <div className="item-body">
    <div className="item-body-about">
    <h5 className="name">{props.name}</h5>
        <p className="category">{props.category}</p>
    </div>
    <div className="item-body-price">
        <h3 className="price">{props.price}</h3>
    </div>
    </div>
</div>
    )
}