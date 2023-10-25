import Style from "../Custom/Style"
export default function Styles (){
    return (
        <div className="styles mt-5 container">

<h3>Style Up</h3> 
      <div id="carouselExampleSlidesOnly" className=" styles-carousel carousel slide mt-3" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Style
        mainImage = "../Images/Collection/Collection (2).png"
        topImage = "../Images/Collection/Collection (1).png"
        bottomImage = "../Images/Collection/Collection (3).png"
        mainText = "Nike Hoodie"
        topText = "Back Side"
        bottomText ="Front View"
      />
    </div>
    <div className="carousel-item">
    <Style
        mainImage = "../Images/Collection/Collection (1).png"
        topImage = "../Images/Collection/Collection (2).png"
        bottomImage = "../Images/Collection/Collection (3).png"
      />
    </div>
    <div className="carousel-item">
       <Style
        mainImage = "../Images/Collection/Collection (1).png"
        topImage = "../Images/Collection/Collection (2).png"
        bottomImage = "../Images/Collection/Collection (3).png"
      />
    </div>
  </div>
</div>
<div className="styles-button">
<button>Step Up Your Style</button>
</div>
 </div>
    )
}