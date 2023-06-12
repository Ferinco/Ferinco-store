export default function Item (props){
    return(
<div className="item">
    <div className="item-image">
    <img src={props.img}/>
    </div>
    <div className="item-tag">
<p className="tag">{props.tag}</p>
    </div>
   <div className="item-body">
   <div className="about">
    <h5 className="name">{props.name}</h5>
        <h3 className="price">{props.price}</h3>
    </div>
    <div className="shop">
        <button>fav</button>
        <button>shop</button>
    </div>
   </div>
</div>
    )
}