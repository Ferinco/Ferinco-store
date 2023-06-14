import Navbar from "./Navbar";

export default function Left(){
return(
    <div className="left">
    <div className="navbar">
        <Navbar/>
    </div>
        <div className="left-body">
            <div className="left-body-text">
                <h1 className="desktop-text">
                    Unleash Your <br/> Street Style with <br/> Our New Collection
                </h1>
                <h1 className="mobile-text">
                    Unleash Your Street Style with Our New Collection
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ante sed lectus <br/> bibendum aliquet. Aenean commodo justo ut justo finibus, a efficitur ex consequat. <br/> In at placerat nisi, vitae tincidunt nunc. Aliqua</p>
            </div>
            <div className="left-body-bottom">
                <div className="left-body-bottom-image">
                    <img src="../Images/bottom image.avif"/>
                    <div className="bottom-text">
                        <h5>Zara Fashion week</h5>
                        <p>letuye ftydieiid iftewi efgd eyyeyie ftye Ferinco will be suoer great, everyone will see!</p>
                    </div>
                </div>
                <div className="left-body-bottom-image">
                    <img src="../Images/bottom image 2.avif"/>
                    <div className="bottom-text">
                        <h5>Zara Fashion week</h5>
                        <p>letuye ftydieiid iftewi efgd eyyeyie ftye. Watch out for this young billionaire.... </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}