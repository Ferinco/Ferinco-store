import Banner from "../Components/landing/frontPage/Banner"
import Collections from "../Components/landing/Collections"
import Products from "../Components/landing/Product"
import Styles from "../Components/landing/Styles"

export default function Home (){
    return(
        <div className="Home">
          
<Banner/>
<Products/>
<Collections/>
<Styles/>
        </div>
    )
}