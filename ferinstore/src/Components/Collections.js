import Collection from "./Collection"
export default function Collections(){
    return(
        <div className="collections">
            <div className="collections-header">
                <h3>Upgrade Your Style <br/> With Our Streetwear Collection</h3>
                <a href="">see more collection</a>
            </div>
            <div className="collections-body">
<Collection
    image = "../Images/Collections/sports.jpg"
    title = "Sports"
/>
<Collection
    image = "../Images/Collections/csual.jpg"
    title = "Casual"
/>
<Collection
    image = "../Images/Collections/k-style.jpg"
    title = "K-Style"
/>
<Collection
    image = "../Images/Collections/afro-style.avif"
    title = "Yoruba"
/>
            </div>
        </div>
    )
}