export default function Style (props){
    return (
        <div className="style">
            <div className="style-left">
            <img src={props.mainImage}/>
            <div className="text">
            <p>{props.mainText}</p>
            </div>

            </div>
            <div className="style-right">
            <div className="style-right-top">
            <img src={props.topImage}/>
            <div className="text">
            <p>{props.topText}</p>
            </div>
            </div>
            <div className="style-right-bottom">
            <img src={props.bottomImage}/>
            <div className="text">
            <p>{props.bottomText}</p>
            </div>
            </div>

            </div>
        </div>
    )
}