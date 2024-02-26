import styled from "styled-components";

export default function BrowseSection(){
    return(
        <Wrapper className="d-flex flex-column container mt-4">
            <div className="top-div d-flex flex-row justify-content-between align-items-baseline">
                <img/> 
                <h1 className="m-0 text-center">Elevate your look with our outstanding collection</h1>
                <img/> 
            </div>
            <div className="top-div d-flex flex-row justify-content-between align-items-top">
                <img/> 
                <button>Browse Collection</button>
                <img/> 
            </div>

        </Wrapper>
    )
}
const Wrapper = styled.div`
img{
    height: 200px;
    width: 200px;
    border: 1px solid red;
    border-radius: 20px;
}
h1{
    font-weight: 700;
}
button{
    height: fit-content;
}

`