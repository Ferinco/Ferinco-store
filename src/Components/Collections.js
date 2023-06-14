import Collection from "./Collection"
export default function Collections(){
    return(
        <div className="collections">
            <div className="collections-header">
                <h3 className="desktop-header">Upgrade Your Style <br/> With Our Streetwear Collection</h3>
                <h3 className="mobile-header">Upgrade Your Style With Our Streetwear Collection</h3>
                <a href="">see more collection</a>
            </div>
            <div className="collections-body">
<Collection
    image = "../Images/Collection/sports.jpg"
    potrait = " ../Images/Collection/sportsP.jpg"
    title = "Sports"
/>
<Collection
    image = "../Images/Collection/casual.avif"
    potrait = " ../Images/Collection/casualP 2.avif"
    title = "Casual"
/>
<Collection
    image = "../Images/Collection/k-style.jpg"
    potrait = "../Images/Collection/k-styleP.avif"
    title = "K-Style"
/>
<Collection
    image = " ../Images/Collection/African.avif"
    potrait = "../Images/Collection/africanP.avif"
    title = "Yoruba"
/>
            </div>
            <div className="collections-link">
<a href="">see more collection</a>
            </div>
        </div>
    )
}