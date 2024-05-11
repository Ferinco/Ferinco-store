import { useAppContext } from "../../contexts/appContext"
import styled from "styled-components"

export default function AddModal(){
    const {openAddSlide, setOpenAddSlide} = useAppContext()
    return(
        <Slide>
        <div className={openAddSlide? "on" : "off"}>
        </div>
        </Slide>
    )
}
const Slide = styled.div`
height: 100vh;
position: absolute;
right: 0 !important;
.on{
    height: 100% !important;
    width: 680px;
    background-color: #f1f1f1;
    z-index: 999 !important;
position: fixed;
right: 0 !important;

}
.off{}

`