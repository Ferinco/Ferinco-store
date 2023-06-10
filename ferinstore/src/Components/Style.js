export default function Style (props){
    return (
        <div className="style">
            <div className="style-left">
            <img src={props.mainImage}/>

            </div>
            <div className="style-right">
            <div className="style-right-top">
            <img src={props.topImage}/>
            </div>
            <div className="style-right-bottom">
            <img src={props.bottomImage}/>
            </div>

            </div>
        </div>
    )
}