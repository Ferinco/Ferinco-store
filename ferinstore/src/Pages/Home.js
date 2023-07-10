import Banner from "../Components/Banner"
import Collections from "../Components/Collections"
import Products from "../Components/Product"
import Styles from "../Components/Styles"
import Footer from "..//Components/Custom/Footer"


export default function Home (){
    return(
        <div className="Home">
<Banner/>
<Products/>
<Collections/>
<Styles/>
<Footer/>
        </div>
    )
}