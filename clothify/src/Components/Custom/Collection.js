import styled from "styled-components";
export default function Collection (props){
    return (
        <CollectionDiv className="collection">
        <div className="collection-image">
            <img className="landscape" src={props.image}/>
            <img className="potrait" src={props.potrait}/>
        </div>
                <h2>{props.title}</h2>
        </CollectionDiv>
    )
}
const CollectionDiv = styled.div`
.collection {
  display: flex;
  flex-direction: column;
  height: 300px;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  .landscape{
    display: block;
  }
  .potrait{
    display: none;
  }

  &-image {
    height: 100%;
    position: relative;
    border-radius: 20px;

    img {
      border-radius: 20px;
      height: 100%;
      width: 100%;
      object-fit: cover;
      position: absolute;
    }
  }
}
`