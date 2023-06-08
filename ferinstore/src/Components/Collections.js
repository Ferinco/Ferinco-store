import Collection from "./Collection"
export default function Collections(){
    return(
        <div className="collections">
            <div className="collections-header">
                <h3>Upgrade Your Style <br/> With Our Streetwear Collection</h3>
                <p>see more collection</p>
            </div>
            <div className="collections-body">
<Collection
    image = "../Images/bottom image 2.avif"
    title = "Sport"
/>
<Collection
    image = "../Images/bottom image 2.avif"
    title = "Casual"
/>
<Collection
    image = "../Images/bottom image 2.avif"
    title = "Yoruba"
/>
<Collection
    image = "../Images/bottom image 2.avif"
    title = "K-Style"
/>
            </div>
        </div>
    )
}